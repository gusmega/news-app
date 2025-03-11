import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '~/lib/utils'

import type { checkboxGroupProps } from './checkbox.type'
import { Label } from './label'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <CheckIcon className='size-3.5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

function CheckboxGroup({ label, name, options }: checkboxGroupProps) {
  return (
    <div>
      <Label className='mb-2'>{label}</Label>
      {options.map((option) => (
        <div key={option.value} className='my-1 flex items-center space-x-2'>
          <Checkbox id={option.value} name={name} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </div>
  )
}

export { Checkbox, CheckboxGroup }
