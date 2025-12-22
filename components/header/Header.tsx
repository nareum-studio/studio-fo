'use client'

import { useState } from 'react'
import MobileMenu from './MobileMenu'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { useScrollDirection } from '@/hooks/useScrollDirection'

const NAV = [
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

export default function Header() {
  const [open, setOpen] = useState(false)

  const scrollDirection = useScrollDirection()

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-50 border-b border-gray-200
          transition-transform duration-300
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-8 md:max-w-6xl">
          <Link href="/" className="text-xl font-bold">
            Nareum Studio
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                className="hover:text-gray-700 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
