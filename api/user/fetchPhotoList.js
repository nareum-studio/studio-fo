/**
 * @param {'PROFILE' | 'KIDS' | 'BALLET'} category
 * @returns {Promise<import('@/public/types/type').PhotoItem[]>}
 */
export const fetchPhotoList = async (category) => {
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
  return json.data
}
