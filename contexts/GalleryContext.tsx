'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { fetchPhotoList } from '@/api/fetchPhotoList'
import { GalleryKey, PhotoItem } from '@/public/types/type'

type GalleryState = Record<GalleryKey, PhotoItem[]>

type GalleryContextValue = {
  photos: GalleryState
  refetch: (category?: GalleryKey) => Promise<void>
}

const CATEGORIES: GalleryKey[] = ['PROFILE', 'KIDS', 'BALLET']

const initialState: GalleryState = {
  PROFILE: [],
  KIDS: [],
  BALLET: [],
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

export const GalleryProvider = ({ children }: { children: React.ReactNode }) => {
  const [photos, setPhotos] = useState<GalleryState>(initialState)

  const fetchCategory = useCallback(async (category: GalleryKey) => {
    const data = await fetchPhotoList(category)
    setPhotos((prev) => ({ ...prev, [category]: data }))
  }, [])

  const refetch = useCallback(
    async (category?: GalleryKey) => {
      if (category) {
        await fetchCategory(category)
      } else {
        await Promise.all(CATEGORIES.map(fetchCategory))
      }
    },
    [fetchCategory],
  )

  useEffect(() => {
    Promise.all(CATEGORIES.map(fetchPhotoList))
      .then(([profile, kids, ballet]) => {
        setPhotos({ PROFILE: profile, KIDS: kids, BALLET: ballet })
      })
      .catch(console.error)
  }, [])

  return (
    <GalleryContext.Provider value={{ photos, refetch }}>
      {children}
    </GalleryContext.Provider>
  )
}

export const useGallery = () => {
  const ctx = useContext(GalleryContext)
  if (!ctx) throw new Error('useGallery must be used within GalleryProvider')
  return ctx
}

/** 카테고리 하나만 가져오는 편의 훅 */
export const useGalleryCategory = (category: GalleryKey): PhotoItem[] => {
  const { photos } = useGallery()
  return photos[category]
}
