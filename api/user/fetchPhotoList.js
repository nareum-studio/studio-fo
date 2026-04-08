/**
 * @type {Map<string, import('@/public/types/type').PhotoItem[]>}
 */
const cache = new Map()

/**
 * @param {'PROFILE' | 'KIDS' | 'BALLET'} category
 * @returns {Promise<import('@/public/types/type').PhotoItem[]>}
 */
export const fetchPhotoList = async (category) => {
  if (typeof window === 'undefined') return []

  if (cache.has(category)) return cache.get(category)

  const res = await fetch(`/user-api/image/list?category=${category}`, {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `이미지 목록 요청 실패 (${res.status})`)
  }

  /** @type {import('@/public/types/type').PhotoListResponse} */
  const json = await res.json()
  cache.set(category, json.data)
  return json.data
}

/** 캐시 초기화 (저장 후 최신 데이터가 필요할 때 호출) */
export const clearPhotoCache = (category) => {
  if (category) {
    cache.delete(category)
  } else {
    cache.clear()
  }
}
