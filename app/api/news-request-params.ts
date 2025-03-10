export type NewsRequestParams = {
  q?: string
  apiKey?: string
  page?: number
  pageSize?: number
  from?: Date
  to?: Date
  categories?: string[]
}
