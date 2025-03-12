import { useNews } from '~/api/use-news'
import NewsItem from '~/components/ui/news-item'

import { NewsLoading } from './news-loading'
import type { NewsProps } from './type'

export function News({ initialData, searchParams }: NewsProps) {
  const { data, isFetching } = useNews(searchParams, initialData)

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
      {isFetching && <NewsLoading />}

      {!isFetching && data.map((article) => <NewsItem key={article.url} article={article} />)}
    </div>
  )
}
