export interface IProductSearchParamsAction {
  query: string;
  limit?: number | undefined;
  page: number;
  category: string;
  tag: string;
  price?: string;
  sort?: string;
}
