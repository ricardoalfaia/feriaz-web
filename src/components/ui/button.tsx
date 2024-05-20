import { ButtonHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'flex justify-center items-center gap-sm',
    'w-full text-lg font-semibold outline-none shadow-1',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'transition duration-300 ease-in-out active:opacity-4',
  ],
  variants: {
    variant: {
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none dark:hover:bg-white/5',
      primary:
        'rounded-md bg-secondary-main shadow-none dark:hover:bg text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      outline: 'border-[1px] border-solid border-neutrals-3 text-gray-medium bg-white shadow-1',
      selected: 'rounded-full border-sm border-secondary-main text-secondary-main hover:bg-secondary-main hover:text-white',
      icon: 'rounded-full border-[1px] border-solid border-neutrals-3 outline-none',
    },
    size: {
      large: 'h-xxl font-extrabold',
      small: 'h-xl font-normal',
      circle: 'h-[60px] w-[60px]',
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
