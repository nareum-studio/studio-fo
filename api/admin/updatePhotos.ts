import { adminFetch } from '@/lib/adminFetch'
import { GalleryKey, SavePayload } from '@/public/types/type'

type UpdateResult = {
  ok: boolean
  status: number
  message?: string
}

export const updatePhotos = async (
  category: GalleryKey,
  { newImages, deleteImageIds }: SavePayload,
): Promise<UpdateResult> => {
  const formData = new FormData()

  newImages.forEach((file) => {
    formData.append('newImages', file)
  })

  deleteImageIds.forEach((id) => {
    formData.append('deleteImages', String(id))
  })

  const res = await adminFetch(`/admin-api/image/update?category=${category}`, {
    method: 'POST',
    body: formData,
  })

  const text = await res.text()

  return {
    ok: res.ok,
    status: res.status,
    message: text || undefined,
  }
}
