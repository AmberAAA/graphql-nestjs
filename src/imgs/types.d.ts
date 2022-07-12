import type { IPageQuery } from 'src/global.type';

export interface IGetTagPageCmd extends IPageQuery {
  name?: string;
}
