/**
 * @param {{ id: string, password: string }} credentials
 * @returns {Promise<{ ok: boolean, message?: string }>}
 */
export const loginAdmin = async ({ id, password }) => {
  const res = await fetch('/admin-api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id, password }),
  })

  const text = await res.text()

  let data
  try {
    data = JSON.parse(text)
  } catch {
    data = { message: text }
  }

  return { ok: res.ok, message: data?.message }
}
