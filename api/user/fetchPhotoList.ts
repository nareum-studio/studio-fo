import { GalleryKey, PhotoItem, PhotoListResponse } from '@/public/types/type'

export const photoListQueryKey = (category: GalleryKey) => ['photos', category] as const

export const fetchPhotoList = async (category: GalleryKey): Promise<PhotoItem[]> => {
  const res = await fetch(`/user-api/image/list?category=${category}`, {
    method: 'GET',
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `이미지 목록 요청 실패 (${res.status})`)
  }

  const json: PhotoListResponse = await res.json()
  return json.data
}

