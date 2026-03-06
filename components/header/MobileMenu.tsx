'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'

import { NAV } from '@/public/data/nav'

type Props = {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  const [openParent, setOpenParent] = useState<string | null>(null)

  const handleClose = () => {
    setOpenParent(null)
    onClose()
  }

  const toggleParent = (name: string) => {
    setOpenParent((prev) => (prev === name ? null : name))
  }

  return (
    <div
      className={`
        fixed inset-0 bg-white z-50 flex flex-col items-center justify-center
        transition-all duration-500 ease-out
        ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}
    >
      <button
        type="button"
        className="absolute top-9 right-6 text-3xl"
        onClick={handleClose}
        aria-label="메뉴 닫기"
      >
        <FiX className="text-2xl" />
      </button>

      <nav className="flex flex-col gap-6 text-xl font-semibold">
        {NAV.map((item) => {
          const hasChildren = (item.children?.length ?? 0) > 0
          const isOpen = openParent === item.name

          if (!hasChildren) {
            return (
              <Link
                key={item.name}
                href={item.href}
                target={item.target}
                onClick={handleClose}
                className="hover:opacity-70"
              >
                {item.name}
              </Link>
            )
          }

          return (
            <div key={item.name} className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => toggleParent(item.name)}
                className="flex items-center justify-between hover:opacity-80"
                aria-expanded={isOpen}
                aria-controls={`mobile-subnav-${item.name}`}
              >
                <span>{item.name}</span>
              </button>

              {isOpen && (
                <div
                  id={`mobile-subnav-${item.name}`}
                  className="flex flex-col gap-3 text-lg font-normal text-gray-600"
                >
                  {item.children?.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      target={child.target}
                      onClick={handleClose}
                      className="hover:text-gray-900"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
