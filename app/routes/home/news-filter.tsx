import { ListFilter } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { CheckboxGroup } from '~/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import { DatePicker } from '~/components/ui/date-picker'
import { Input } from '~/components/ui/input'

import { categories } from './categories'
import { sources } from './sources'

export function NewsFilter() {
  return (
    <Collapsible className='mt-8 mb-6 w-full space-y-2'>
      <div className='flex items-center justify-between space-x-2'>
        <Input placeholder='Search keywords' />
        <CollapsibleTrigger asChild>
          <Button variant='secondary'>
            <ListFilter className='h-4 w-4' />
            <span className='sr-only'>More Filters</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className='space-y-2'>
        <div className='grid gap-2 gap-x-8 sm:grid-cols-2 md:grid-cols-3'>
          <div>
            <DatePicker label='From' />
            <DatePicker label='To' className='mt-2' />
          </div>

          <CheckboxGroup options={categories} label='Categories' name='category' />
          <CheckboxGroup options={sources} label='Sources' name='source' />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
