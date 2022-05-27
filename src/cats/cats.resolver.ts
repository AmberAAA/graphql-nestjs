import { ParseIntPipe } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';

@Resolver('Cat')
export class CatsResolver {
  constructor(private service: CatsService) {}

  @Query('cats')
  async findAll() {
    return this.service.findAll();
  }

  @Query('cat')
  async findOne(@Args('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
}
