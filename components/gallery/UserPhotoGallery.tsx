'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { fetchPhotoList } from '@/api/user/fetchPhotoList'
import { GalleryKey, PhotoItem } from '@/public/types/type'

type UserPhotoGalleryProps = {
  category: GalleryKey
}

export const UserPhotoGallery = ({ category }: UserPhotoGalleryProps) => {
  const [photos, setPhotos] = useState<PhotoItem[]>([])

  useEffect(() => {
    fetchPhotoList(category).then(setPhotos).catch(console.error)
  }, [category])

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-2/3 overflow-hidden">
          <Image
            src={photo.url}
            alt={photo.originalName}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
      ))}
    </div>
  )
}
