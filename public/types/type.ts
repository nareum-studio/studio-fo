export type GalleryKey = 'PROFILE' | 'KIDS' | 'BALLET' | 'ARTISTIC'

// ── API 응답 타입 ─────────────────────────────────────────
export type PhotoItem = {
  id: number
  category: GalleryKey
  originalName: string
  url: string
  extension: string
  createdAt: string
  updatedAt: string | null
}

export type PhotoListResponse = {
  message: string
  data: PhotoItem[]
}

// ── 클라이언트 상태 타입 ──────────────────────────────────
/**
 * serverId  있음 → 서버에서 온 기존 이미지
 * file      있음 → 로컬에서 새로 추가한 이미지 (blob URL)
 */
export type ImageItem = {
  serverId?: number
  url: string
  file?: File
}

export type SavePayload = {
  newImages: File[]
  deleteImageIds: number[]
}

export type ImageManager = {
  images: ImageItem[]
  deletedIds: number[]
  addFiles: (fileList: FileList | null) => void
  removeImage: (index: number) => void
}

export type SectionConfig = {
  key: GalleryKey
  title: string
  manager: ImageManager
}
