import debounce from 'lodash/debounce'
import { Filter, ListFilter, OctagonX } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import type { NewsSearchParams } from '~/api/news-search-params'
import { Button } from '~/components/ui/button'
import { CheckboxGroup } from '~/components/ui/checkbox'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import { DatePicker } from '~/components/ui/date-picker'
import { FormProvider } from '~/components/ui/form-provider'
import { Input } from '~/components/ui/input'

import { categories } from './categories'
import { sources } from './sources'
import type { NewsFilterProps } from './type'

export function NewsFilter({ onSubmit }: NewsFilterProps) {
  const methods = useForm<NewsSearchParams>({
    defaultValues: {
      categories: [],
      sources: [],
    },
  })
  const q = useWatch({ control: methods.control, name: 'q' })

  const limitSearchDate = (date: Date) => date > new Date() || date < new Date('2010-01-01')

  const submitKeyword = useRef(
    debounce(() => {
      methods.handleSubmit(onSubmit)()
    }, 500)
  )

  const resetFilter = () => {
    methods.reset()
    onSubmit({})
  }

  useEffect(() => {
    if (q === undefined) return

    submitKeyword.current()
  }, [submitKeyword, q])

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Collapsible className='mt-8 mb-6 w-full space-y-2'>
        <div className='flex items-center justify-between space-x-2'>
          <Input name='q' placeholder='Search keywords' />
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
              <DatePicker label='From' name='from' disabled={limitSearchDate} />
              <DatePicker label='To' className='mt-2' name='to' disabled={limitSearchDate} />
            </div>

            <CheckboxGroup options={categories} label='Categories' name='categories' />
            <CheckboxGroup options={sources} label='Sources' name='sources' />
          </div>

          <div className='mt-2 grid gap-2 sm:grid-cols-2'>
            <Button type='submit' className='sm:w-half w-full'>
              <Filter className='h-4 w-4' />
              Apply Filters
            </Button>

            <Button
              type='button'
              variant='destructive'
              className='sm:w-half w-full'
              onClick={resetFilter}
            >
              <OctagonX className='h-4 w-4' />
              Reset Filters
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </FormProvider>
  )
}
