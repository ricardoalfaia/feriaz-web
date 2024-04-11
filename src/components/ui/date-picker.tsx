'use client'

import React, { useCallback } from 'react'
import { endOfDay, format } from 'date-fns'
import { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/buttonExt'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Icons } from '../Icons/icons'
import { pt } from 'date-fns/locale'

export function DatePickerWithRange({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  })

  const handlerUpdateFrom = useCallback((range?: DateRange) => {
    if (range) {
      setDate(range)
    }
  }, [])

  const handlerUpdateTo = useCallback(
    (range?: DateRange) => {
      if (range?.to) {
        setDate({ from: date?.from, to: range.to })
      }
    },
    [date?.from]
  )

  return (
    <div className={cn('flex justify-center transition ease-in-out to-lime-300', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'ghost'}
            className={cn('w-[235px] relative justify-start text-left font-normal', !date && 'text-muted-foreground')}>
            {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
            <Icons name="Calendar" size={20} />
            {date?.from ? (
              date.to ? (
                <div className="mt-2 text-xs ml-4">
                  <span className="absolute top-0.5 left-[54px]">IDA</span>
                  {`${format(date.from, 'dd/LL/y', { locale: pt })}`}
                </div>
              ) : (
                <div className="mt-2 text-xs ml-4">
                  <span className="absolute top-0.5 left-[54px]">IDA</span>
                  {format(date.from, 'dd/LL/y', { locale: pt })}
                </div>
              )
            ) : (
              ''
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handlerUpdateFrom}
            numberOfMonths={2}
            locale={pt}
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={'ghost'}
            className={cn('w-[235px] relative justify-start text-left font-normal', !date && 'text-muted-foreground')}>
            {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
            <Icons name="Calendar" size={20} />
            {date?.from ? (
              date.to ? (
                <div className="mt-2 text-xs ml-4">
                  <span className="absolute top-0.5">VOLTA</span>
                  {`${format(date.to, 'dd/LL/y', { locale: pt })}`}
                </div>
              ) : (
                <div className="mt-2 text-xs ml-4">
                  <span className="absolute top-0.5 left-[54px]">IDA</span>
                  {format(date.from, 'dd/LL/y', { locale: pt })}
                </div>
              )
            ) : (
              ''
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.to}
            selected={date}
            onSelect={handlerUpdateTo}
            numberOfMonths={2}
            locale={pt}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
