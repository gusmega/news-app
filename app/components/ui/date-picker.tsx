'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

import type { DatePickerProps } from './date-picker.type'
import { Label } from './label'

export function DatePicker(props: DatePickerProps) {
  const { label, selected, placeholder = 'Select a date', className, ...calendarProps } = props

  return (
    <div className={className}>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger className='mt-1 w-full'>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !selected && 'text-muted-foreground'
            )}
            asChild
          >
            <div>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {selected ? format(selected, 'PPP') : <span>{placeholder}</span>}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar {...calendarProps} mode='single' selected={selected} initialFocus />
        </PopoverContent>
      </Popover>
    </div>
  )
}
