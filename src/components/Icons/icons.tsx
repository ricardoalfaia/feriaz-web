import { iconsHashTable } from './iconsHashTable'
import { cn } from '@/lib/utils'

const Colors = [
  'primary-main',
  'secondary-main',
  'neutrals-1',
  'neutrals-2',
  'neutrals-3',
  'neutrals-4',
  'neutrals-5',
  'neutrals-6',
  'success-main',
  'success-light',
  'error-main',
  'error-light',
  'alert-main',
  'alert-light',
  'information-main',
  'information-light',
  'visited-main',
  'overlay',
] as const

type Colors = (typeof Colors)[number] | String
export type IconNames = keyof typeof iconsHashTable

export interface IconProps {
  name: IconNames
  size?: number | string
  height?: number | string
  color?: Colors
  className?: string
  title?: string
  attr?: React.SVGAttributes<SVGElement>
}

export function Icons({ color, size = 20, height = 20, name, className, title, attr }: IconProps) {
  const svgProps = getSvgProps(name, color)

  return (
    <div className={cn('flex', className)}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={'100%'} viewBox={svgProps.viewBox} fill="none" {...attr}>
        {svgProps.vectors}
        {title && <title>{title}</title>}
      </svg>
    </div>
  )
}

function getSvgProps(name: IconProps['name'], color: IconProps['color']) {
  const icon = iconsHashTable[name]

  return {
    vectors: icon.vectors(getColor(color)),
    viewBox: icon.viewBox,
  }
}

function getColor(color: IconProps['color']) {
  // @ts-ignore
  if (color && Colors.includes(color)) {
    return `var(--color-${color})`
  }

  return (color || 'currentColor') as string
}
