import { useState } from 'react'

import { fetchAllNews } from '~/api/fetchers/fetch-all-news'
import type { NewsSearchParams } from '~/api/types/news-search-params'

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
  try {
    return await fetchAllNews()
  } catch {
    return {}
  }
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
