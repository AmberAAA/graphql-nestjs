import { Controller, Get, Param, Query } from '@nestjs/common';
import { ImgsService } from './imgs.service';

@Controller('imgs')
export class ImgsController {
  constructor(private readonly imgsService: ImgsService) {}

  @Get('page')
  findPage(@Query('page') page: string, @Query('size') size: string) {
    return this.imgsService.findByPage(+page, +size);
  }

  @Get('/details/:id')
  findOne(@Param('id') id: string) {
    return this.imgsService.findOne(+id);
  }
}
