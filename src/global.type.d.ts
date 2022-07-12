export interface IPageQuery {
  page: number;
  size: number;
}

export interface IPage<T> extends IPageQuery {
  total: number;
  data: T[];
}
