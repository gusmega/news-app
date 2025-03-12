import { useNews } from '~/api/use-news'
import NewsItem from '~/components/ui/news-item'

import { NewsEmpty } from './news-empty'
import { NewsError } from './news-error'
import { NewsLoading } from './news-loading'
import type { NewsProps } from './type'

export function News({ searchParams }: NewsProps) {
  const { data, isFetching, isError } = useNews(searchParams)

  if (isError) return <NewsError />

  if (!isFetching && !data?.length) return <NewsEmpty />

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {isFetching && <NewsLoading />}

      {!isFetching && data.map((article) => <NewsItem key={article.url} article={article} />)}
    </div>
  )
}
