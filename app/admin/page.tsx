'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function AdminPage() {
  const [intro, setIntro] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = (type: 'intro' | 'photo') => {
    if (type === 'intro') {
      console.log('소개글 저장:', intro)
      setMessage('소개글이 성공적으로 저장되었습니다.')
    } else {
      console.log('이미지 저장:', image)
      setMessage('사진이 성공적으로 저장되었습니다.')
    }

    setOpen(true)
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
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
              <Textarea
                placeholder="소개글을 입력하세요"
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="min-h-[200px]"
              />
              <Button onClick={() => handleSave('intro')}>저장</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 사진 수정 */}
        <TabsContent value="photo">
          <Card>
            <CardHeader>
              <CardTitle>사진 수정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setImage(e.target.files ? e.target.files[0] : null)
                }
              />
              <Button onClick={() => handleSave('photo')}>저장</Button>
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
