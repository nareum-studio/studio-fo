import Image from 'next/image'

const images = [
  { src: '/image1.jpg', alt: 'img1' },
  { src: '/image1.jpg', alt: 'img2' },
  { src: '/image1.jpg', alt: 'img3' },
  { src: '/image1.jpg', alt: 'img4' },
  { src: '/image1.jpg', alt: 'img5' },
  { src: '/image1.jpg', alt: 'img6' },
  { src: '/image1.jpg', alt: 'img7' },
  { src: '/image1.jpg', alt: 'img8' },
  { src: '/image1.jpg', alt: 'img9' },
]

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          width={1000}
          height={1000}
        />
      ))}
    </div>
  )
}
