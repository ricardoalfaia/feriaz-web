import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Link href="/">
        <Image src="/static/logo_branco.svg" width={150} height={49} alt="Logo" />
      </Link>
    </>
  )
}
