import { useQuery } from '@tanstack/react-query'

import { fetchNewsApi } from '~/api/fetch-news-api'
import NewsItem from '~/components/ui/news-item'

import type { Route } from './+types/index'
import { NewsFilter } from './news-filter'

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'News Aggregator App' },
    { name: 'description', content: 'Welcome to News Aggregator App!' },
  ]
}

export async function loader() {
  return await fetchNewsApi({})
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data } = useQuery({
    queryKey: ['news'],
    queryFn: () => fetchNewsApi({}),
    initialData: loaderData,
    staleTime: 1000,
  })

  if (!data) return null

  return (
    <>
      <NewsFilter />

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {data.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </div>
    </>
  )
}
