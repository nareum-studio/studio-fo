type LoginCredentials = {
  id: string
  password: string
}

type LoginResult = {
  ok: boolean
  message?: string
}

export const loginAdmin = async ({ id, password }: LoginCredentials): Promise<LoginResult> => {
  const res = await fetch('/admin-api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id, password }),
  })

  const text = await res.text()

  let data: { message?: string }
  try {
    data = JSON.parse(text) as { message?: string }
  } catch {
    data = { message: text }
  }

  return { ok: res.ok, message: data?.message }
}
