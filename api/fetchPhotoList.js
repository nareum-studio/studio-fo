/**
 * @param {'PROFILE' | 'KIDS' | 'BALLET'} category
 * @returns {Promise<string[]>} 이미지 URL 배열
 */
export const fetchPhotoList = async (category) => {
  const res = await fetch(`/image/list?category=${category}`, {
    method: 'GET',
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `이미지 목록 요청 실패 (${res.status})`)
  }

  const data = await res.json()
  return data
}
