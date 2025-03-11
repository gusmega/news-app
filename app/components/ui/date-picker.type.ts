import type { DayPickerSingleProps } from 'react-day-picker'

export type DatePickerProps = {
  name: string
  label: string
  placeholder?: string
} & Omit<DayPickerSingleProps, 'mode'>
