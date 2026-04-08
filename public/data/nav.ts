export type NavItem = {
  name: string
  href: string
  target?: string
  children?: Array<{ name: string; href: string; target?: string }>
}

export const NAV: NavItem[] = [
  {
    name: 'PORTFOLIO',
    href: '/portfolio/profile',
    children: [
      { name: 'PROFILE', href: '/portfolio/profile' },
      { name: 'KIDS', href: '/portfolio/kids' },
      { name: 'BALLET', href: '/portfolio/ballet' },
    ],
  },
  { name: 'ARTISTIC', href: '/artistic' },
  { name: 'ABOUT', href: '/about' },
  { name: 'PRICE', href: '/price' },
  { name: 'CONTACT', href: '/contact' },
]
