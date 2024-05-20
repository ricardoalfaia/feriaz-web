import { AlignJustify, CircleUserRound } from 'lucide-react'
import { Logo } from '@/components/logo'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-primary-main h-3xl flex justify-between items-center px-md">
      <Link href="/travel">
        <AlignJustify color="white" width="32" height="32" />
      </Link>
      <Logo width={116.6} height={38.1} />
      <Link href="/login">
        <CircleUserRound color="white" width="30" height="30" />
      </Link>
    </header>
  )
}
