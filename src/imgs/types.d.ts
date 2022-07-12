import type { PageQuery } from 'src/global.type';

export class GetTagPageCmd extends PageQuery {
  name?: string;
}

export class GetImgPageCmd extends PageQuery {
  name?: string;
  tag?: number;
}
