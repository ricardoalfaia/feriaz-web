import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  width: number
  height: number
}

export function Logo({ className, width, height }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image src="/static/logo_branco.svg" width={width} height={height} alt="Logo" className={className} />
      </Link>
    </>
  )
}
