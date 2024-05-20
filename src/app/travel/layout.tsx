import { Suspense } from 'react'
import type { Metadata } from 'next'
import PrincipalLayout from '../shared/principal-layout'
import { Nav } from '../shared/nav/nav'

export const metadata: Metadata = {
  title: 'Feriaz pesquise sua viagem',
  description: 'Projeto feriaz inteligente',
}

export default function TravelLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <PrincipalLayout>
      {/* <Nav /> */}
      {children}
    </PrincipalLayout>
  )
}
