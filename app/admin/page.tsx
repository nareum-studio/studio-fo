'use client'

import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import { IntroEditor } from '../../components/admin/IntroEditor'
import { updatePhotos } from '@/api/admin/updatePhotos'
import { GalleryKey, SavePayload } from '@/public/types/type'

export default function AdminPage() {
  const [intro, setIntro] = useState('')
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleIntroSave = () => {
    console.log('소개글 저장:', intro)
    setMessage('소개글이 성공적으로 저장되었습니다.')
    setOpen(true)
  }

  const handleSave = async (section: GalleryKey, payload: SavePayload) => {
    const { ok, message } = await updatePhotos(section, payload)

    if (!ok) {
      setMessage(message || `저장 실패`)
      setOpen(true)
      return
    }

    setMessage('사진이 저장되었습니다.')
    setOpen(true)
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">관리자 페이지</h1>

      <Tabs defaultValue="intro" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="intro">소개글 수정</TabsTrigger>
          <TabsTrigger value="photo">등록된 사진 수정</TabsTrigger>
        </TabsList>

        {/* 소개글 수정 */}
        <TabsContent value="intro">
          <Card>
            <CardHeader>
              <CardTitle>소개글 수정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <IntroEditor
                intro={intro}
                onChange={setIntro}
                onSave={handleIntroSave}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* 사진 수정 */}
        <TabsContent value="photo">
          <Card>
            <CardHeader>
              <CardTitle>사진 수정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <GalleryManager onSave={handleSave} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 저장 완료 Alert */}
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
