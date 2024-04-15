'use client'

import React, { useReducer, useState } from 'react'
import { Icons, IconNames } from '@/components/Icons/icons'
import cn from '@/libs/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon: IconNames
  iconSize: number
  required?: boolean
  containerClassName?: string

  error?: string | boolean
  errorPosition?: boolean
  preferPlaceholder?: boolean
  forgotPassword?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      error,
      errorPosition,
      forgotPassword,
      icon,
      iconSize,
      id,
      label,
      preferPlaceholder,
      required,
      type,
      ...props
    },
    ref
  ) => {
    label = !required && label ? `${label}*` : label

    return (
      <div className={cn('container relative h-[54px]', 'flex justify-start', containerClassName)}>
        {Icons && <Icons name={icon} size={iconSize} className="ml-m" />}
        <div className={cn('group', 'flex flex-col pl-m py-xs')}>
          <label htmlFor={id} className="text-xs text-[#949494] uppercase">
            {label}
          </label>
          <input type={type} id={id} ref={ref} {...props} className={cn('border-none outline-none w-full text-[14px]')} />
        </div>
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
