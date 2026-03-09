'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

type Props = {
  intro: string
  onChange: (value: string) => void
  onSave: () => void
}

export function IntroEditor({ intro, onChange, onSave }: Props) {
  return (
    <div className="space-y-4">
      <Textarea
        placeholder="소개글을 입력하세요"
        value={intro}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[200px]"
      />
      <Button type="button" onClick={onSave}>
        저장
      </Button>
    </div>
  )
}
