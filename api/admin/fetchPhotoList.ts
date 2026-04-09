import { adminFetch } from '@/lib/adminFetch'
import { GalleryKey, PhotoItem, PhotoListResponse } from '@/public/types/type'

export const fetchPhotoList = async (category: GalleryKey): Promise<PhotoItem[]> => {
  if (typeof window === 'undefined') return []

  const res = await adminFetch(`/admin-api/image/list?category=${category}`)

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `이미지 목록 요청 실패 (${res.status})`)
  }

  const json: PhotoListResponse = await res.json()
  return json.data
}
