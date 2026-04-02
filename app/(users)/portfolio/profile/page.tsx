'use client'

import { useGalleryCategory } from '@/contexts/GalleryContext'
import Image from 'next/image'

export default function Profile() {
  const profilePhotos = useGalleryCategory('PROFILE')

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {profilePhotos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.originalName}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      ))}
    </div>
  )
}
