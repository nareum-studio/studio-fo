/**
 * @param {'PROFILE' | 'KIDS' | 'BALLET'} category
 * @param {{ newImages: File[], deleteImageIds: number[] }} payload
 * @returns {Promise<{ ok: boolean, message?: string }>}
 */
export const updatePhotos = async (category, { newImages, deleteImageIds }) => {
  const formData = new FormData()

  newImages.forEach((file) => {
    formData.append('newImages', file)
  })

  deleteImageIds.forEach((id) => {
    formData.append('deleteImages', String(id))
  })

  const res = await fetch(`/admin-api/image/update?category=${category}`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  })

  const text = await res.text()

  return { ok: res.ok, message: text || undefined }
}
