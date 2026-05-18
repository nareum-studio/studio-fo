'use client'

import { SyntheticEvent } from 'react'
import Image from 'next/image'

import { usePhotoListQuery } from '@/hooks/usePhotoListQuery'
import { GalleryKey, PhotoItem } from '@/public/types/type'

type UserPhotoGalleryProps = {
  category: GalleryKey
}

export const UserPhotoGallery = ({ category }: UserPhotoGalleryProps) => {
  const { data } = usePhotoListQuery(category)
  const photos: PhotoItem[] = data ?? []
  const handlePreventImageCopy = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="aspect-2/3 overflow-hidden select-none pointer-events-auto"
          onContextMenu={handlePreventImageCopy}
          onDragStart={handlePreventImageCopy}
        >
          <Image
            src={photo.url}
            alt={photo.originalName}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            draggable={false}
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
