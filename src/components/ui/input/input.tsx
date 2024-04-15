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

    const [focus, setFocus] = useState(false)
    const [showPassword, toggleShowPassword] = useReducer(s => !s, false)

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
      setFocus(true)
      props.onFocus?.(e)
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
      setFocus(false)
      props.onBlur?.(e)
    }

    const currentType = type === 'password' && showPassword ? 'text' : type

    const valueExists = String(props.value).length > 0

    return (
      <>
        <div className={cn('relative flex justify-start items-center w-full h-[54px] bg-white mb-m', containerClassName)}>
          {/* {Icons && <Icons name={icon} size={iconSize} className="ml-m" />} */}

          {((label && focus) || error || valueExists) && (
            <label
              className={cn(
                'absolute',
                '-top-xs',
                'left-l',
                'px-xs',
                'z-10',
                'p-0',
                'text-[11px]',
                'lowercase',
                props.disabled ? 'bg-neutrals-2' : 'bg-neutrals-1',
                error && 'text-error-main'
              )}
              style={{ lineHeight: 0.5 }}
              htmlFor={id}>
              {label}
            </label>
          )}

          <input
            {...props}
            ref={ref}
            className={cn(
              'w-full border-none text-neutrals-4 text-m lowercase ml-[12px] outline-none',
              forgotPassword ? 'rounded-[10px]' : 'rounded-s',
              error ? 'border-error-main' : 'border-neutrals-4',
              error ? 'focus:border-error-main' : 'focus:border-neutrals-6',
              props.disabled && 'bg-neutrals-2',
              className
            )}
            data-testid="Input/input"
            type={currentType}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={focus || preferPlaceholder ? props.placeholder : label}
          />
          {type === 'password' && valueExists && (
            <div
              data-testid="Input/eye"
              className="absolute top-[50%] right-[0] flex h-full translate-y-[-50%] flex-row items-center justify-center pr-m"
              onClick={toggleShowPassword}>
              <span className={cn('mr-[13px]', 'text-[11px]', 'font-medium', error ? 'text-error-main' : 'text-neutrals-2')}>
                {showPassword ? 'ocultar' : 'mostrar'} senha
              </span>
              <i
                className={cn(!showPassword ? 'icon-icon-visualizar' : 'icon-icon-ocultar', error ? 'text-error-main' : 'text-neutrals-5')}
                style={{ fontSize: 14 }}
              />
            </div>
          )}
        </div>
        {error && (
          <span
            role="alert"
            className={cn('block w-full text-xs text-error-main', `${forgotPassword ? 'ml-[215px]' : ''}`, {
              'absolute px-s text-right': errorPosition,
            })}>
            {typeof error === 'boolean' ? '*ei faltou esse campo!' : error}
          </span>
        )}
      </>
    )
  }
)

Input.displayName = 'Input'

export { Input }
