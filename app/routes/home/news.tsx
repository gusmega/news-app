import { useQuery } from '@tanstack/react-query'

import { fetchNewsApi } from '~/api/fetch-news-api'
import NewsItem from '~/components/ui/news-item'

import type { NewsProps } from './type'

export function News({ initialData, searchParams }: NewsProps) {
  const { data, isFetching } = useQuery({
    queryKey: ['news', searchParams],
    queryFn: () => fetchNewsApi(searchParams),
    initialData,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  if (isFetching) return null

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {data.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  )
}
