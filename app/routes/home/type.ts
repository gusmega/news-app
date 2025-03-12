import type { Article } from '~/api/types/article'
import type { NewsSearchParams } from '~/api/types/news-search-params'

export type NewsFilterProps = {
  onSubmit: (data: NewsSearchParams) => void
}

export type NewsProps = {
  initialData: Record<string, Article[]>
  searchParams: NewsSearchParams
}
