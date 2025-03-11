import type { DayPickerSingleProps } from 'react-day-picker'

export type DatePickerProps = {
  label: string
  selected?: Date
  placeholder?: string
} & Omit<DayPickerSingleProps, 'mode'>
