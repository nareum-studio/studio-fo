'use client'

import { GalleryProvider } from '@/contexts/GalleryContext'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <GalleryProvider>{children}</GalleryProvider>
}
