import { useState } from 'react'

import { fetchNewsApi } from '~/api/fetch-news-api'
import type { NewsSearchParams } from '~/api/news-search-params'

import type { Route } from './+types/index'
import { News } from './news'
import { NewsFilter } from './news-filter'

export function meta() {
  return [
    { title: 'News Aggregator App' },
    { name: 'description', content: 'Welcome to News Aggregator App!' },
  ]
}

export async function loader() {
  return await fetchNewsApi({})
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useState<NewsSearchParams>({})

  return (
    <>
      <NewsFilter onSubmit={setSearchParams} />
      <News initialData={loaderData} searchParams={searchParams} />
    </>
  )
}
