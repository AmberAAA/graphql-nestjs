import { Controller, Get, Param } from '@nestjs/common';
import { WordService } from './word.service';

@Controller('word')
export class WordController {
  constructor(private service: WordService) {}

  @Get('')
  async test() {
    return this.service.findOne(1);
  }

  @Get('cet4/:id')
  async cet4(@Param('id') id: number) {
    return this.service.findCet(id);
  }
}
