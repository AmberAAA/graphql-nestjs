export class PageQuery {
  page: number;
  size: number;
}

export class Page<T> extends PageQuery {
  total: number;
  data: T[];
}
