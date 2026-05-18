import type { Metadata } from 'next'
import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import '@/app/globals.css'

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
      <main className="md:pt-30 md:pl-[3%] md:pr-[3%] pt-20">{children}</main>
      <Footer />
    </>
  )
}
