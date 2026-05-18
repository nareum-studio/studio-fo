'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { adminPhotoListQueryKey } from '@/api/admin/fetchPhotoList'
import { updatePhotos } from '@/api/admin/updatePhotos'
import { GalleryKey, SavePayload } from '@/public/types/type'

type MutationArgs = {
  category: GalleryKey
  payload: SavePayload
}

export function useUpdateAdminPhotos() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ category, payload }: MutationArgs) =>
      updatePhotos(category, payload),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: adminPhotoListQueryKey(variables.category),
      })
    },
  })
}
