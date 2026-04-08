import { clearAdminSession } from '@/lib/auth'

/**
 * admin API 전용 fetch 래퍼.
 * 401 응답 시 세션을 초기화하고 로그인 페이지로 리다이렉트합니다.
 */
export const adminFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> => {
  const res = await fetch(input, { credentials: 'include', ...init })

  if (res.status === 401) {
    clearAdminSession()
    window.location.replace('/admin/login')
    // 이후 코드가 실행되지 않도록 resolve되지 않는 Promise 반환
    return new Promise(() => {})
  }

  return res
}
