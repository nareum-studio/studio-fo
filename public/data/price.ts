export type PriceItem = {
  title: string
  price: string
  desc: string[]
  extra?: string
}

export type BalletItem = {
  title: string
  price: string
  desc: string
}

export type BalletSection = {
  label: string
  items: BalletItem[]
}

export const naturalProfilePrices: PriceItem[] = [
  {
    title: '1컨셉',
    price: '150,000',
    desc: ['보정 4장', '촬영 40분', '원본 전체 제공'],
  },
  {
    title: '2컨셉',
    price: '200,000',
    desc: ['보정 7장', '촬영 80분', '원본 전체 제공'],
  },
  {
    title: '3컨셉',
    price: '250,000',
    desc: ['보정 10장', '촬영 120분', '원본 전체 제공'],
  },
]

export const kidsPrices: PriceItem[] = [
  {
    title: '레드 컨셉',
    price: '200,000',
    desc: ['보정 4장', '촬영 90분', '원본 전체 제공'],
  },
  {
    title: '봄 컨셉',
    price: '200,000',
    desc: ['보정 4장', '촬영 90분', '원본 전체 제공'],
    extra: '※ 생화 추가 +₩50,000',
  },
  {
    title: '자연광',
    price: '150,000',
    desc: ['보정 4장', '촬영 40분', '원본 전체 제공'],
  },
]

export const balletSections: BalletSection[] = [
  {
    label: '일반 촬영',
    items: [
      { title: '1컨셉', price: '250,000', desc: '보정 4장 · 60분 · 원본 제공' },
      { title: '2컨셉', price: '380,000', desc: '보정 8장 · 90분 · 원본 제공' },
    ],
  },
  {
    label: '자연광',
    items: [
      {
        title: '1컨셉',
        price: '150,000',
        desc: '보정 · 촬영 시간 상이 / 원본 제공',
      },
      {
        title: '2컨셉',
        price: '200,000',
        desc: '보정 · 촬영 시간 상이 / 원본 제공',
      },
      {
        title: '3컨셉',
        price: '250,000',
        desc: '보정 · 촬영 시간 상이 / 원본 제공',
      },
    ],
  },
]
