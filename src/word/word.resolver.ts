import { ParseIntPipe } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { Word } from 'src/graphql.schema';
import { WordService } from './word.service';

@Resolver()
export class WordResolver {
  constructor(private wordService: WordService) {}

  @Query('word')
  getWord(@Args('id', ParseIntPipe) id: number): Promise<Word> {
    return this.wordService.findOne(id);
  }
}
