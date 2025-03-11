export type CheckboxOption = {
  label: string
  value: string
}

export type checkboxGroupProps = {
  label: string
  name: string
  options: CheckboxOption[]
  selected?: string[]
  onChange?: (selected: string[]) => void
}
