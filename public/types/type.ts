export type ImageItem = {
  id?: string
  url: string
  file?: File
  isNew: boolean
}

export type SavePayload = {
  newImages: File[]
  deleteImages: string[]
}

export type GalleryKey = 'PROFILE' | 'KIDS' | 'BALLET'

export type ImageManager = {
  images: ImageItem[]
  deletedImages: string[]
  addFiles: (fileList: FileList | null) => void
  removeImage: (index: number) => void
}

export type SectionConfig = {
  key: GalleryKey
  title: string
  manager: ImageManager
}
