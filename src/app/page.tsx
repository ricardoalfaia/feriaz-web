import Logo from '@/components/logo'
import { Icons } from '@/components/Icons/icons'
import { Button } from '@/components/ui/button'

import cn from '@/libs/utils'

export default function Home() {
  return (
    <main className={cn('px-xl')}>
      <Logo />

      <Button variant="primary" size="large" className="w-[245px] mb-m">
        Login
      </Button>

      <Button variant="primary" size="small" className="w-[150px] mb-m">
        Confirmar
      </Button>

      <Button variant="selected" size="small" className="w-[150px] mb-m">
        Selecione
      </Button>

      <Button variant="outline" size="large" className="w-[150px] mb-m">
        Clique Aqui
      </Button>

      <Button variant="outline" size="large" className="w-[245px] mb-m">
        <Icons name="Facebook" size={20} /> Facebook
      </Button>

      <Button variant="outline" size="large" className="w-[245px]">
        <Icons name="Google" size={20} /> Google
      </Button>

      <Icons name="Airplane" size={20} color="secondary-main" />

      <Icons name="Calendar" size={20} color="secondary-main" />

      <Icons name="User" size={20} color="secondary-main" />

      <Icons name="ArrowDown" size={20} color="secondary-main" />

      <Icons name="Location" size={20} color="secondary-main" />

      <Icons name="Alarm" size={20} color="secondary-main" />

      <Button variant="outline" size="large" className="w-[48px]">
        <Icons name="Repeat" size={20} color="secondary-main" />
      </Button>
    </main>
  )
}
