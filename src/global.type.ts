import { ApiParam, ApiProperty, ApiQuery } from '@nestjs/swagger';

export class PageQuery {
  @ApiProperty({
    required: true,
    description: '页码，从1开始',
  })
  page: number;
  @ApiProperty({
    required: true,
    description: '大小',
  })
  size: number;
}

export class Page<T> extends PageQuery {
  total: number;
  data: T[];
}
