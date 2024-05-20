import { SearchBox } from '@/app/shared/searchBox/searchBox'
import { Input } from '@/components/ui/inputExt'
import { Button } from '@/components/ui/button'

export default function Flight() {
  return (
    <section className="mt-2xl relative">
      <SearchBox>
        <h2 className="mb-md font-bold">Descubra o transporte e a hospedagem ideais</h2>
        <div className="flex justify-between items-center gap-sm">
          <Input icon="Location" label="saindo de onde" iconSize={20} containerClassName="bg-white  rounded-[10px] " />
          <Input icon="Airplane" label="como chegar" iconSize={20} containerClassName="bg-white rounded-[10px] w-1/2 " />
          <Input icon="Calendar" label="ida" iconSize={20} containerClassName="bg-white  rounded-[10px] w-1/2" />
          <Input icon="Calendar" label="chegando de onde" iconSize={20} containerClassName="bg-white rounded-[10px] w-1/3" />
          <Input icon="User" label="quem vai" iconSize={20} containerClassName="bg-white rounded-[10px] w-1/3" />
        </div>
        <span> + filtros </span>
        <Button className="w-1/5 h-[48px] mx-auto mt-lg" size="large">
          pesquisar
        </Button>
      </SearchBox>
    </section>
  )
}
