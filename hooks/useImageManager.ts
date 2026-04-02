import { useEffect, useState } from 'react'
import { ImageItem } from '@/public/types/type'

export function useImageManager(initialImages: string[] = []) {
  const [images, setImages] = useState<ImageItem[]>(() =>
    initialImages.map((url) => ({
      id: crypto.randomUUID(),
      url,
      isNew: false,
    })),
  )

  const [deletedImages, setDeletedImages] = useState<string[]>([])

  // API 응답이 도착해 initialImages가 빈 배열 → 실제 배열로 바뀔 때 동기화
  const prevKey = initialImages.join('\u0000')
  useEffect(() => {
    setImages(
      initialImages.map((url) => ({
        id: crypto.randomUUID(),
        url,
        isNew: false,
      })),
    )
    setDeletedImages([])
    // prevKey 가 바뀔 때만 실행
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevKey])

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return

    const newImages: ImageItem[] = Array.from(fileList).map((file) => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      file,
      isNew: true,
    }))

    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (index: number) => {
    const target = images[index]

    if (!target) return

    // 기존 이미지 삭제 추적
    if (!target.isNew) {
      setDeletedImages((prev) => {
        if (prev.includes(target.url)) return prev
        return [...prev, target.url]
      })
    }

    // 새 이미지 preview cleanup
    if (target.isNew) {
      URL.revokeObjectURL(target.url)
    }

    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  useEffect(() => {
    return () => {
      images.forEach((img) => {
        if (img.isNew) {
          URL.revokeObjectURL(img.url)
        }
      })
    }
  }, [images])

  return {
    images,
    deletedImages,
    addFiles,
    removeImage,
  }
}
