'use client'

import Link from 'next/link'
import { FiX } from 'react-icons/fi'

type Props = {
  open: boolean
  onClose: () => void
}

const menus = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'RESERVE', href: '/reserve' },
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/nareumdaumm_studio?igsh=MW50b3Zyb2h6aDhheA==',
    target: '_blank',
  },
]

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`
        fixed inset-0 bg-white z-50 flex flex-col items-center justify-center
        transition-all duration-500 ease-out
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
    >
      <button className="absolute top-9 right-6 text-3xl" onClick={onClose}>
        <FiX className="text-2xl" />
      </button>
      <nav className="flex flex-col gap-10 text-2xl font-semibold">
        {menus.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            target={item.target}
            className="hover:opacity-70"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
