import { TriangleAlert } from 'lucide-react'

export function NewsError() {
  return (
    <div className='my-20 text-center'>
      <div className='flex items-center justify-center gap-2'>
        <TriangleAlert className='h-8 w-8' />
        <h3>Oops!</h3>
      </div>
      <p>There was an error while fetching the news.</p>
      <p className='mt-0'>Please try again later.</p>
    </div>
  )
}
