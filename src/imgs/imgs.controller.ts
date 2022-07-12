import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ParseInitFromAnyPipe } from 'src/share/pipe/parseInitFormObjectPipe';
import { ImgsService } from './imgs.service';
import type { GetImgPageCmd, GetTagPageCmd } from './types';

@Controller('imgs')
export class ImgsController {
  constructor(private readonly imgsService: ImgsService) {}

  @Get('page')
  findPage(@Query(ParseInitFromAnyPipe) query: GetImgPageCmd) {
    return this.imgsService.findByPage(query);
  }

  @Get('tag')
  findTagPage(@Query(ParseInitFromAnyPipe) query: GetTagPageCmd) {
    return this.imgsService.getTagPage(query);
  }

  @Get('/details/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imgsService.findOne(id);
  }
}
