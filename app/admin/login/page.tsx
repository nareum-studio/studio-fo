'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setAdminSession } from '@/lib/auth'
import { loginAdmin } from '@/api/admin/login'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const router = useRouter()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { ok, message } = await loginAdmin({ id, password })

      if (!ok) {
        alert(message || '로그인 실패')
        return
      }

      // HttpOnly JSESSIONID는 document.cookie에 안 보이므로, 클라이언트 가드용 플래그
      setAdminSession()
      router.push('/admin')
    } catch {
      alert('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">관리자 로그인</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id" className="text-xl">
                아이디
              </Label>
              <Input
                id="id"
                type="text"
                placeholder="아이디 입력"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-xl">
                비밀번호
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호 입력"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
