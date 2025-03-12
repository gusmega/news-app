import { queryOptions } from '@tanstack/react-query'

import { fetchTheGuardianApi } from '../fetchers/fetch-the-guardian-api'
import type { Article } from '../types/article'
import type { NewsSearchParams } from '../types/news-search-params'

export function theGuardianQueryOptions(
  searchParams: NewsSearchParams,
  enabled?: boolean,
  initialData?: Article[]
) {
  return queryOptions({
    queryKey: ['the-guardian-api', searchParams],
    queryFn: () => fetchTheGuardianApi(searchParams),
    enabled,
    initialData,
    refetchOnWindowFocus: false,
    retry: 2,
  })
}
