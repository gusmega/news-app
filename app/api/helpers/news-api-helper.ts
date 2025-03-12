import { type UseQueryResult } from '@tanstack/react-query'

import type { Article } from '../types/article'

type QueryResult = UseQueryResult<Article[], Error>[]

export const combineAndSortNews = (results: QueryResult): Article[] => {
  const combinedData = results
    .reduce((acc, result) => {
      if (result.data) acc.push(...result.data)

      return acc
    }, [] as Article[])
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return combinedData
}
