import { DatabaseBackup } from 'lucide-react'

export function NewsEmpty() {
  return (
    <div className='my-20 text-center'>
      <div className='flex items-center justify-center gap-2'>
        <DatabaseBackup className='h-8 w-8' />
        <h3>News not found!</h3>
      </div>
      <p>There are no news to display with the current criteria.</p>
      <p className='mt-0'>Try adjusting your search parameters.</p>
    </div>
  )
}
