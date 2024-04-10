import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-4xl bg-primary-bg">
      <Logo />
      <Button>Clique aqui</Button>
    </main>
  )
}
