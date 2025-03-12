import { Skeleton } from '~/components/ui/skeleton'

export function NewsLoading() {
  return Array.from({ length: 9 }).map((_, index) => (
    <Skeleton key={index} className='h-100 w-full rounded-2xl md:rounded-3xl' />
  ))
}
