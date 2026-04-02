import { kidsImages } from '@/public/data/profile'
import Image from 'next/image'

export default function Kids() {
  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      {kidsImages.map((image) => (
        <Image
          key={image.alt}
          src={image.url}
          alt={image.alt}
          width={1000}
          height={1000}
        />
      ))}
    </div>
  )
}
