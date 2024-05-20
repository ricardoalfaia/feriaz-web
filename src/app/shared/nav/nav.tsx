import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { MdLocalHotel, MdFlightTakeoff } from 'react-icons/md'
import { FaCar, FaLocationArrow } from 'react-icons/fa'

interface TabIconProps {
  icon: any
  label: string
}

export function TabIcon({ icon, label }: TabIconProps) {
  const IconComponent = icon

  return (
    <Tab className="outline-none">
      <div className="flex flex-col">
        {/* <Button variant="icon" size="circle">
          <IconComponent size={38} />
        </Button> */}
        <span className="text-xs mt-sm">{label}</span>
      </div>
    </Tab>
  )
}

export function Nav() {
  return (
    <TabGroup>
      <TabList className="w-full flex justify-center gap-2xl mt-lg">
        <TabIcon label="Onde Ficar" icon={MdLocalHotel} />
        <TabIcon label="Como Chegar" icon={MdFlightTakeoff} />
        <TabIcon label="Alugar Carro" icon={FaCar} />
        <TabIcon label="Pesquisar" icon={FaLocationArrow} />
        {/* <Tab className="data-[selected]:bg-secondary data-[selected]:text-white data-[hover]:underline">Descobrir Ferias</Tab> */}
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  )
}
