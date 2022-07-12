import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ImgsService } from './imgs.service';
import type { IGetTagPageCmd } from './types';

@Controller('imgs')
export class ImgsController {
  constructor(private readonly imgsService: ImgsService) {}

  @Get('page')
  findPage(
    @Query('page', ParseIntPipe) page: number,
    @Query('size', ParseIntPipe) size: number,
  ) {
    return this.imgsService.findByPage({ page, size });
  }

  @Get('tag')
  findTagPage(@Query() query: IGetTagPageCmd) {
    return this.imgsService.getTagPage(query);
  }

  @Get('/details/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imgsService.findOne(id);
  }
}
