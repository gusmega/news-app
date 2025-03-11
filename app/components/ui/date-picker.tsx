'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

import type { DatePickerProps } from './date-picker.type'
import { Label } from './label'

export function DatePicker(props: DatePickerProps) {
  const { label, placeholder = 'Select a date', name, className, ...calendarProps } = props

  const { control } = useFormContext()
  const {
    field: { value, onChange },
  } = useController({ name, control })

  const [calendarOpen, setCalendarOpen] = useState(false)

  const onDateSelect = (date: Date | undefined) => {
    onChange(date)
    setCalendarOpen(false)
  }

  return (
    <div className={className}>
      <Label>{label}</Label>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger className='mt-1 w-full'>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left font-normal',
              !value && 'text-muted-foreground'
            )}
            asChild
          >
            <div>
              <CalendarIcon className='mr-2 h-4 w-4' />
              {value ? format(value, 'PPP') : <span>{placeholder}</span>}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0'>
          <Calendar
            {...calendarProps}
            mode='single'
            initialFocus
            selected={value}
            onSelect={onDateSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
