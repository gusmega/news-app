import type { NewsSearchParams } from '~/api/news-search-params'
import type { Article } from '~/api/types/article'

export type NewsFilterProps = {
  onSubmit: (data: NewsSearchParams) => void
}

export type NewsProps = {
  initialData: Article[]
  searchParams: NewsSearchParams
}
