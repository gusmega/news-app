import { queryOptions } from '@tanstack/react-query'

import { fetchNytApi } from '../fetchers/fetch-nyt-api'
import type { NewsSearchParams } from '../types/news-search-params'

export function nytQueryOptions(searchParams: NewsSearchParams, enabled?: boolean) {
  return queryOptions({
    queryKey: ['nyt-api', searchParams],
    queryFn: () => fetchNytApi(searchParams),
    enabled,
    refetchOnWindowFocus: false,
    retry: 2,
  })
}
