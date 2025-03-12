import axios from 'axios'

import type { NewsSearchParams } from './news-search-params'
import type { Article } from './types/article'

const API_URL = 'https://content.guardianapis.com/search'

const transformParams = (params: NewsSearchParams) => {
  const categories = params.categories?.join(' OR ')

  const transformedParams: Record<string, string | undefined> = {
    q: params.q,
    'from-date': params.from?.toISOString(),
    'to-date': params.to?.toISOString(),
  }

  if (categories) transformedParams.q = categories

  if (params.q && categories) transformedParams.q = `${params.q} AND ${categories}`

  return transformedParams
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformResults = (results: any[]): Article[] => {
  return results.map((result) => ({
    title: result.webTitle,
    description: result.fields.trailText,
    author: result.tags[0]?.webTitle,
    url: result.webUrl,
    urlToImage: result.fields.thumbnail,
    publishedAt: result.webPublicationDate,
    source: 'the-guardian',
  }))
}

export const fetchTheGuardianApi = async (params: NewsSearchParams): Promise<Article[]> => {
  const { data, status } = await axios.get(API_URL, {
    params: {
      ...transformParams(params),
      'show-tags': 'contributor',
      'show-fields': 'thumbnail,trailText',
      'show-references': 'author',
      'page-size': 55,
      section: 'news',
      lang: 'en',
      'order-by': 'newest',
      'api-key': import.meta.env.VITE_GUARDIAN_API_KEY,
    },
  })

  if (status === 200) {
    return transformResults(data.response.results)
  }

  return []
}
