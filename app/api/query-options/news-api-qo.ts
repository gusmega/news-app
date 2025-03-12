import { queryOptions } from '@tanstack/react-query'

import { fetchNewsApi } from '../fetchers/fetch-news-api'
import type { NewsSearchParams } from '../types/news-search-params'

export function newsApiQueryOptions(searchParams: NewsSearchParams, enabled?: boolean) {
  return queryOptions({
    queryKey: ['news-api', searchParams],
    queryFn: () => fetchNewsApi(searchParams),
    enabled,
    refetchOnWindowFocus: false,
    retry: 2,
  })
}
