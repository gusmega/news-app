import { useQueries } from '@tanstack/react-query'
import omit from 'lodash/omit'

import { combineAndSortNews } from './helpers/news-api-helper'
import { newsApiQueryOptions } from './query-options/news-api-qo'
import { nytQueryOptions } from './query-options/nyt-api-qo'
import { theGuardianQueryOptions } from './query-options/the-guardian-qo'
import type { NewsSearchParams } from './types/news-search-params'

export const useNews = (searchParams: NewsSearchParams) => {
  const params = omit(searchParams, ['source'])

  const sources = searchParams.sources
  const hasSources = sources && sources?.length > 0

  const enableNewsApi = !hasSources || sources?.includes('news-api')
  const enableTheGuardian = !hasSources || sources?.includes('the-guardian')
  const enableNyt = !hasSources || sources?.includes('nyt')

  return useQueries({
    queries: [
      newsApiQueryOptions(params, enableNewsApi),
      theGuardianQueryOptions(params, enableTheGuardian),
      nytQueryOptions(params, enableNyt),
    ],
    combine: (results) => {
      return {
        data: combineAndSortNews(results),
        isPending: results.some((result) => result.isPending),
        isFetching: results.some((result) => result.isFetching),
        isError: results.every((result) => result.isError),
      }
    },
  })
}
