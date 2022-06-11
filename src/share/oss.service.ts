import { Injectable } from '@nestjs/common';

import Oss, * as $oss from '@alicloud/oss20190517';
import * as $OpenApi from '@alicloud/openapi-client';
import { from, map } from 'rxjs';

@Injectable()
export class OssService {
  public readonly client: Oss;

  constructor() {
    const config = new $OpenApi.Config({
      accessKeyId: process.env.ALI_ACCESS_KEY_ID,
      accessKeySecret: process.env.ALI_ACCESS_KEY_SECRET,
      regionId: 'cn-hangzhou',
      endpoint: 'oss-cn-hangzhou.aliyuncs.com',
    });
    this.client = new Oss(config);
  }

  listBuck() {
    const r = new $oss.ListBucketsRequest();
    return from(this.client.listBuckets(r)).pipe(
      map((item) => item.body.buckets),
    );
  }
}
