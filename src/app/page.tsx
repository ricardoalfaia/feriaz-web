import Logo from '@/components/logo'
import { Icons } from '@/components/Icons/icons'
import { Button } from '@/components/ui/button'

import { BadgeDollarSign, BedDouble, CalendarDays, CarFront, Repeat2, User } from 'lucide-react'

import cn from '@/libs/utils'
import { Input } from '@/components/ui/input/input'

export default function Home() {
  return (
    <main className={cn('px-xl')}>
      <Logo />

      <Input
        type="text"
        label="E-mail"
        preferPlaceholder
        placeholder="digite o seu email aqui"
        containerClassName="border-s rounded-t-l border-neutrals-3"
        icon="Calendar"
        error=""
        required
        iconSize={18}
      />

      {/* <Input type="text" placeholder="Digite o email" containerCss="border-s border-neutrals-3" icon="Passport" iconSize={24} />
      <Input type="text" placeholder="Digite o email" containerCss="border-s border-neutrals-3" icon="Phone" iconSize={20} />
      <Input type="text" placeholder="Digite o email" containerCss="border-s rounded-b-l border-neutrals-3" icon="Calendar" iconSize={20} /> */}

      {/* <Button variant="primary" size="large" className="w-[245px] mb-m">
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

      <Button variant="outline" size="large" className="w-[48px] mb-m mt-m">
        <Repeat2 width={32} height={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <BedDouble width={28} height={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <Icons name="Airplane" size={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <CarFront width={28} height={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <CalendarDays width={28} height={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <User width={28} height={28} />
      </Button>

      <Button variant="outline" size="large" className="w-[48px] mb-m">
        <BadgeDollarSign width={28} height={28} />
      </Button>  */}
    </main>
  )
}
