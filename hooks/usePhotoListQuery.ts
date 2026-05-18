'use client'

import { useQuery } from '@tanstack/react-query'

import { fetchPhotoList, photoListQueryKey } from '@/api/user/fetchPhotoList'
import { GalleryKey } from '@/public/types/type'

export const usePhotoListQuery = (category: GalleryKey) => {
  return useQuery({
    queryKey: photoListQueryKey(category),
    queryFn: () => fetchPhotoList(category),
    staleTime: 1000 * 60 * 5, // 5분 동안 신선
    refetchOnWindowFocus: false,
  })
}
