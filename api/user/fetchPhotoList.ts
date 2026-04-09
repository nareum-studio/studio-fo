import { GalleryKey, PhotoItem, PhotoListResponse } from '@/public/types/type'

const cache = new Map<GalleryKey, PhotoItem[]>()

export const fetchPhotoList = async (category: GalleryKey): Promise<PhotoItem[]> => {
  if (typeof window === 'undefined') return []

  const cached = cache.get(category)
  if (cached) return cached

  const res = await fetch(`/user-api/image/list?category=${category}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `이미지 목록 요청 실패 (${res.status})`)
  }

  const json: PhotoListResponse = await res.json()
  cache.set(category, json.data)
  return json.data
}

/** 캐시 초기화 (저장 후 최신 데이터가 필요할 때 호출) */
export const clearPhotoCache = (category?: GalleryKey): void => {
  if (category) {
    cache.delete(category)
  } else {
    cache.clear()
  }
}
