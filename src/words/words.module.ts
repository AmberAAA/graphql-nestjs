import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [TypeOrmModule.forFeature([Word])],
})
export class WordsModule {}
