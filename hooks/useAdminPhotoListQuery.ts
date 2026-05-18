'use client'

import { useQuery } from '@tanstack/react-query'

import {
  adminPhotoListQueryKey,
  fetchPhotoList,
} from '@/api/admin/fetchPhotoList'
import { GalleryKey } from '@/public/types/type'

type Options = {
  enabled?: boolean
}

export const useAdminPhotoListQuery = (
  category: GalleryKey,
  options?: Options,
) => {
  return useQuery({
    queryKey: adminPhotoListQueryKey(category),
    queryFn: () => fetchPhotoList(category),
    staleTime: 1000 * 60 * 5,
    enabled: options?.enabled ?? true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  })
}
