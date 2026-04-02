/**
 * 브라우저에서 document.cookie로 읽을 수 있는 쿠키만 반환합니다.
 * HttpOnly 쿠키는 JS에서 접근할 수 없으므로 항상 null입니다.
 */
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null

  const prefix = `${encodeURIComponent(name)}=`
  const parts = document.cookie.split('; ')

  for (const part of parts) {
    if (part.startsWith(prefix)) {
      return decodeURIComponent(part.slice(prefix.length))
    }
  }

  return null
}

export const hasCookie = (name: string): boolean => getCookie(name) !== null
