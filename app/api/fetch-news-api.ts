import axios from 'axios'

import type { NewsSearchParams } from './news-search-params'
import type { Article } from './types/article'

const API_URL = 'https://newsapi.org/v2/everything'

const transformParams = (params: NewsSearchParams) => {
  const categories = params.categories?.join(' OR ')

  const transformedParams: Record<string, string | undefined> = {
    q: params.q,
    from: params.from?.toISOString(),
    to: params.to?.toISOString(),
  }

  if (categories) transformedParams.q = categories

  if (params.q && categories) transformedParams.q = `${params.q} AND ${categories}`

  return transformedParams
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformResults = (results: any[]): Article[] => {
  return results.map((result) => ({
    ...result,
    source: 'the-news',
  }))
}

export const fetchNewsApi = async (params: NewsSearchParams): Promise<Article[]> => {
  const { data, status } = await axios.get(API_URL, {
    params: {
      ...transformParams(params),
      language: 'en',
      pageSize: 55,
      sources: 'the-verge,the-washington-post,the-wall-street-journal,ign,bloomberg',
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    },
  })

  if (status === 200) {
    return transformResults(data.articles)
  }

  return []
}
