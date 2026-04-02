import { hasCookie } from '@/lib/cookies'

/** 세션 쿠키명 (서버가 HttpOnly로 주면 JS에서 읽을 수 없음 → 로컬 플래그와 함께 사용) */
export const SESSION_COOKIE_NAME = 'JSESSIONID'

/** 로그인 성공 시 HttpOnly 쿠키를 JS로 읽을 수 없을 때 관리자 접근을 허용하기 위한 플래그 */
export const ADMIN_SESSION_STORAGE_KEY = 'nareum-admin-session'

export const hasAdminSession = (): boolean => {
  if (typeof window === 'undefined') return false
  if (hasCookie(SESSION_COOKIE_NAME)) return true
  return localStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === '1'
}

export const setAdminSession = () => {
  localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, '1')
}

export const clearAdminSession = () => {
  localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY)
}
