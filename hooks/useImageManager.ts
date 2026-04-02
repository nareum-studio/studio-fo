import { useEffect, useState } from 'react'

import { ImageItem, PhotoItem } from '@/public/types/type'

const toItems = (photos: PhotoItem[]): ImageItem[] =>
  photos.map((p) => ({ serverId: p.id, url: p.url }))

export function useImageManager(initialPhotos: PhotoItem[] = []) {
  const [prevPhotos, setPrevPhotos] = useState(initialPhotos)
  const [images, setImages] = useState<ImageItem[]>(() =>
    toItems(initialPhotos),
  )
  const [deletedIds, setDeletedIds] = useState<number[]>([])

  // API 응답이 도착해 initialPhotos가 변경되면 동기화
  if (prevPhotos !== initialPhotos) {
    setPrevPhotos(initialPhotos)
    setImages(toItems(initialPhotos))
    setDeletedIds([])
  }

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return

    const newItems: ImageItem[] = Array.from(fileList).map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }))

    setImages((prev) => [...prev, ...newItems])
  }

  const removeImage = (index: number) => {
    const target = images[index]
    if (!target) return

    // 서버 이미지 → 삭제 ID 추적
    if (target.serverId !== undefined) {
      setDeletedIds((prev) =>
        prev.includes(target.serverId!) ? prev : [...prev, target.serverId!],
      )
    }

    // 로컬 blob URL → 메모리 해제
    if (target.file) {
      URL.revokeObjectURL(target.url)
    }

    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  // 언마운트 시 blob URL 정리
  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.file) URL.revokeObjectURL(img.url)
      })
    }
  }, [images])

  return { images, deletedIds, addFiles, removeImage }
}
