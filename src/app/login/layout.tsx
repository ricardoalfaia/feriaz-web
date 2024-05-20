import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feriaz Login',
  description: 'Projeto feriaz inteligente',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
