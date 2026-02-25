import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import '@/app/globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '나름다움스튜디오',
  description: '나름다움스튜디오',
}

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="pt-24 px-10">{children}</main>
      <Footer />
    </>
  )
}
