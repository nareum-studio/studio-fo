'use client'

import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { GalleryManager } from '../../components/admin/GalleryManager'
import { updatePhotos } from '@/api/admin/updatePhotos'
import { GalleryKey, SavePayload } from '@/public/types/type'

export default function AdminPage() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSave = async (section: GalleryKey, payload: SavePayload) => {
    setSaving(true)
    try {
      const { ok, message } = await updatePhotos(section, payload)

      if (!ok) {
        setMessage(message || '저장 실패')
        setOpen(true)
        return
      }

      setMessage('사진이 저장되었습니다.')
      setOpen(true)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">관리자 페이지</h1>

      <Card>
        <CardHeader>
          <CardTitle>사진 수정</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <GalleryManager onSave={handleSave} saving={saving} />
        </CardContent>
      </Card>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>저장 완료</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpen(false)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
