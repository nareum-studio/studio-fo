'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { fetchPhotoList } from '@/api/user/fetchPhotoList'
import { PhotoItem } from '@/public/types/type'

export default function Kids() {
  const [photos, setPhotos] = useState<PhotoItem[]>([])

  useEffect(() => {
    fetchPhotoList('KIDS').then(setPhotos).catch(console.error)
  }, [])

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.originalName}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
          unoptimized
        />
      ))}
    </div>
  )
}
