import { queryOptions } from '@tanstack/react-query'

import { fetchNytApi } from '../fetchers/fetch-nyt-api'
import type { Article } from '../types/article'
import type { NewsSearchParams } from '../types/news-search-params'

export function nytQueryOptions(
  searchParams: NewsSearchParams,
  enabled?: boolean,
  initialData?: Article[]
) {
  return queryOptions({
    queryKey: ['nyt-api', searchParams],
    queryFn: () => fetchNytApi(searchParams),
    enabled,
    initialData,
    refetchOnWindowFocus: false,
    retry: 2,
  })
}
