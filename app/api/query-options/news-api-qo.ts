import { queryOptions } from '@tanstack/react-query'

import { fetchNewsApi } from '../fetchers/fetch-news-api'
import type { Article } from '../types/article'
import type { NewsSearchParams } from '../types/news-search-params'

export function newsApiQueryOptions(
  searchParams: NewsSearchParams,
  enabled?: boolean,
  initialData?: Article[]
) {
  return queryOptions({
    queryKey: ['news-api', searchParams],
    queryFn: () => fetchNewsApi(searchParams),
    enabled,
    initialData,
    refetchOnWindowFocus: false,
    retry: 2,
  })
}
