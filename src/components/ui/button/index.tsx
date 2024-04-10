import { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

/**
 * Definição das variantes do componente
 *
 * Resultado:
 * color?: "primary" | "neutral"
 * flat?: boolean
 */
export const buttonVariants = tv({
  base: 'px-4 py-1.5 rounded-full hover:opacity-80',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      neutral: 'bg-zinc-500 text-black dark:text-white',
    },
    flat: {
      true: 'bg-transparent',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
  compoundVariants: [
    {
      color: 'primary',
      flat: false,
      class: 'bg-blue-500/40',
    },
    {
      color: 'neutral',
      flat: true,
      class: 'bg-zinc-500/20',
    },
  ],
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants()} {...props}>
      {children}
    </button>
  )
}
