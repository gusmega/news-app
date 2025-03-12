import { fetchNewsApi } from './fetch-news-api'
import { fetchNytApi } from './fetch-nyt-api'
import { fetchTheGuardianApi } from './fetch-the-guardian-api'
import type { Article } from '../types/article'

export const fetchAllNews = async (): Promise<Record<string, Article[]>> => {
  const results = await Promise.all([fetchNewsApi({}), fetchTheGuardianApi({}), fetchNytApi({})])

  return results.reduce(
    (acc, result) => {
      acc[result?.[0]?.source] = result

      return acc
    },
    {} as Record<string, Article[]>
  )
}
