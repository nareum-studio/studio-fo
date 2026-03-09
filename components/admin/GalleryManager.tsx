'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  GalleryKey,
  ImageItem,
  SavePayload,
  SectionConfig,
} from '@/public/types/type'
import { profileImages } from '@/public/data/profile'

function useImageManager(initialImages: string[] = []) {
  const [images, setImages] = useState<ImageItem[]>(() =>
    initialImages.map((url) => ({
      id: crypto.randomUUID(),
      url,
      isNew: false,
    })),
  )

  const [deletedImages, setDeletedImages] = useState<string[]>([])

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

type Props = {
  onSave: (section: GalleryKey, payload: SavePayload) => void
}
export function GalleryManager({ onSave }: Props) {
  const profile = useImageManager(profileImages.map((image) => image.url))
  const kids = useImageManager()
  const ballet = useImageManager()

  const sections: SectionConfig[] = [
    { key: 'profile', title: 'PROFILE', manager: profile },
    { key: 'kids', title: 'KIDS', manager: kids },
    { key: 'ballet', title: 'BALLET', manager: ballet },
  ]

  return (
    <div className="space-y-6">
      {sections.map(({ key, title, manager }) => (
        <div key={key} className="space-y-3 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() =>
                onSave(key, {
                  newImages: manager.images
                    .filter((img) => img.isNew)
                    .map((img) => img.file!),
                  deleteImages: manager.deletedImages,
                })
              }
            >
              저장
            </Button>
          </div>

          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => manager.addFiles(e.target.files)}
          />

          {manager.images.length > 0 && (
            <div className="grid grid-cols-2 gap-3 rounded-lg border bg-muted/20 p-3">
              {manager.images.map((img, idx) => (
                <div
                  key={img.id}
                  className="relative overflow-hidden rounded-md border bg-white"
                >
                  <button
                    type="button"
                    onClick={() => manager.removeImage(idx)}
                    className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/75"
                  >
                    삭제
                  </button>

                  <div className="relative aspect-video w-full">
                    <Image
                      src={img.url}
                      alt={`이미지 ${idx + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
