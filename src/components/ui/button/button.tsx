import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'flex justify-center items-center gap-s',
    'w-full text-l font-semibold outline-none shadow-1',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-4',
  ],
  variants: {
    variant: {
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none dark:hover:bg-white/5',
      primary: 'rounded-m bg-secondary-main text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      outline: 'border border-s border-neutrals-3 text-gray-medium bg-white shadow-1',
      selected: 'rounded-full border-s border-secondary-main text-secondary-main hover:bg-secondary-main hover:text-white',
    },
    size: {
      large: 'h-[48px] font-extrabold',
      small: 'h-xl font-normal',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large',
  },
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  asChild?: boolean
}

export function Button({ asChild, variant, size, className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return <Component {...props} className={button({ variant, size, className })} />
}
