import axios from 'axios'

import type { Article } from '../types/article'
import type { NewsSearchParams } from '../types/news-search-params'

const ASSETS_URL = 'https://static01.nyt.com/'
const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'

const transformParams = (params: NewsSearchParams) => {
  const categories = params.categories?.join('", "')

  const transformedParams: Record<string, string | undefined> = {
    q: params.q,
    begin_date: params.from?.toISOString(),
    end_date: params.to?.toISOString(),
  }

  if (categories) transformedParams.fq = `news_desk:("${categories}")`

  return transformedParams
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformResults = (results: any[]): Article[] => {
  return results.map((result) => ({
    title: result.headline.main,
    description: result.abstract,
    author: result.byline.original,
    url: result.web_url,
    urlToImage: `${ASSETS_URL}${result.multimedia[0]?.url}`,
    publishedAt: result.pub_date,
    source: 'nyt',
  }))
}

export const fetchNytApi = async (params: NewsSearchParams): Promise<Article[]> => {
  const { data, status } = await axios.get(API_URL, {
    params: {
      ...transformParams(params),
      facet: false,
      sort: 'newest',
      'api-key': import.meta.env.VITE_NYT_API_KEY,
    },
  })

  if (status === 200) {
    return transformResults(data.response.docs)
  }

  return []
}
