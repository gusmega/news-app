import { useState } from 'react'

import type { NewsSearchParams } from '~/api/types/news-search-params'

import { News } from './news'
import { NewsFilter } from './news-filter'

export function meta() {
  return [
    { title: 'News Aggregator App' },
    { name: 'description', content: 'Welcome to News Aggregator App!' },
  ]
}

export default function Home() {
  const [searchParams, setSearchParams] = useState<NewsSearchParams>({})

  return (
    <>
      <NewsFilter onSubmit={setSearchParams} />
      <News searchParams={searchParams} />
    </>
  )
}
