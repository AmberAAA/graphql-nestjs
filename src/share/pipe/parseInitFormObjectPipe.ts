import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseInitFromAnyPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') {
      return parseInt(value);
    }
    if (typeof value === 'object') {
      Object.keys(value).map((item) => {
        if (Object.prototype.hasOwnProperty.call(value, item)) {
          // 遍历
          value[item] = this.transform(value[item]);
        }
      });
    } else {
      if (!isNaN(parseInt(value))) {
        return parseInt(value);
      }
    }
    return value;
  }
}
