import { Injectable } from '@nestjs/common';

import * as OSS from 'ali-oss';
import { from } from 'rxjs';

@Injectable()
export class OssService {
  public readonly client: OSS;

  constructor() {
    this.client = new OSS({
      accessKeyId: process.env.ALI_ACCESS_KEY_ID,
      accessKeySecret: process.env.ALI_ACCESS_KEY_SECRET,
      region: 'cn-hangzhou',
      endpoint: 'oss-cn-hangzhou.aliyuncs.com',
      bucket: 'private-abr',
    });
  }

  listBuck() {
    return this.client.listBuckets({});
  }

  sign(path: string) {
    return this.client.signatureUrl(path);
  }
}
