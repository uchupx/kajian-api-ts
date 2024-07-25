export type DefQuery = {
  id?: string;
  keyword?: string;
  page?: number;
  limit?: number;
  sort?: string;
}

export type MetaResponse = {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
}
