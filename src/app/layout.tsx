import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Feriaz',
  description: 'Projeto feriaz inteligente',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
