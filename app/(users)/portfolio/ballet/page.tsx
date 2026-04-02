'use client'

import Image from 'next/image'
import { useGalleryCategory } from '@/contexts/GalleryContext'

export default function Ballet() {
  const balletPhotos = useGalleryCategory('BALLET')

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {balletPhotos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.url}
          alt={photo.originalName}
          width={1000}
          height={1000}
        />
      ))}
    </div>
  )
}
