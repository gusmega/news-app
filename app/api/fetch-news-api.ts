import axios from 'axios'

import type { NewsSearchParams } from './news-search-params'
import type { Article } from './types/article'

export const fetchNewsApi = async (params: NewsSearchParams): Promise<Article[]> => {
  const response = await axios.get('https://newsapi.org/v2/everything', {
    params: {
      ...params,
      language: 'en',
      sources: 'the-verge,the-washington-post,the-wall-street-journal,ign,bloomberg',
      apiKey: import.meta.env.VITE_NEWS_API_KEY,
    },
  })

  return response.data.articles
}
