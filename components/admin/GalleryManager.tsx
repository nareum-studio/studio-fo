'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fetchPhotoList } from '@/api/admin/fetchPhotoList'
import { useImageManager } from '@/hooks/useImageManager'
import {
  GalleryKey,
  PhotoItem,
  SavePayload,
  SectionConfig,
} from '@/public/types/type'

type Props = {
  onSave: (section: GalleryKey, payload: SavePayload) => void
}

export function GalleryManager({ onSave }: Props) {
  const [category, setCategory] = useState<GalleryKey>('PROFILE')

  const [profilePhotos, setProfilePhotos] = useState<PhotoItem[]>([])
  const [kidsPhotos, setKidsPhotos] = useState<PhotoItem[]>([])
  const [balletPhotos, setBalletPhotos] = useState<PhotoItem[]>([])

  useEffect(() => {
    fetchPhotoList('PROFILE').then(setProfilePhotos).catch(console.error)
    fetchPhotoList('KIDS').then(setKidsPhotos).catch(console.error)
    fetchPhotoList('BALLET').then(setBalletPhotos).catch(console.error)
  }, [])

  const profile = useImageManager(profilePhotos)
  const kids = useImageManager(kidsPhotos)
  const ballet = useImageManager(balletPhotos)

  const sections: SectionConfig[] = [
    { key: 'PROFILE', title: 'PROFILE', manager: profile },
    { key: 'KIDS', title: 'KIDS', manager: kids },
    { key: 'BALLET', title: 'BALLET', manager: ballet },
  ]

  const active = sections.find((s) => s.key === category) ?? sections[0]
  const { key, title, manager } = active

  const handleCategoryChange = (value: string) => {
    setCategory(value as GalleryKey)
  }

  const handleSaveClick = () => {
    const newImages = manager.images
      .filter((img) => img.file !== undefined)
      .map((img) => img.file!)

    console.log('newImages', newImages)
    console.log('deleteImageIds', manager.deletedIds)

    onSave(key, { newImages, deleteImageIds: manager.deletedIds })
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <Label
            htmlFor="gallery-category"
            className="text-sm font-medium text-foreground"
          >
            카테고리
          </Label>
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger
              id="gallery-category"
              className="max-w-md w-full"
              aria-label="갤러리 카테고리 선택"
            >
              <SelectValue placeholder="카테고리 선택" />
            </SelectTrigger>
            <SelectContent>
              {sections.map(({ key: k, title: t }) => (
                <SelectItem key={k} value={k}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0 self-start sm:self-auto"
          onClick={handleSaveClick}
        >
          {title} 저장
        </Button>
      </div>

      <Input
        type="file"
        accept="image/*"
        multiple
        aria-label={`${title} 이미지 파일 선택`}
        onChange={(e) => manager.addFiles(e.target.files)}
      />

      {manager.images.length > 0 && (
        <div className="grid grid-cols-2 gap-3 rounded-lg border bg-muted/20 p-3 sm:grid-cols-4 md:grid-cols-7">
          {manager.images.map((img, idx) => (
            <div
              key={img.serverId ?? img.url}
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
                  alt={`${title} 이미지 ${idx + 1}`}
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
  )
}
