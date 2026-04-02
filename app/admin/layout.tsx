'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { hasAdminSession } from '@/lib/auth'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const hasSession = hasAdminSession()
    const isLoginPage = pathname === '/admin/login'

    if (hasSession) {
      if (isLoginPage) {
        router.replace('/admin')
      }
      return
    }

    if (!isLoginPage) {
      router.replace('/admin/login')
    }
  }, [router, pathname])

  return <>{children}</>
}
