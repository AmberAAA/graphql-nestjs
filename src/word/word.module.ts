import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WineCet4Word } from './entity/wine-cet4-word';
import { Word } from './entity/word';
import { WordService } from './word.service';
import { WordController } from './word.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Word, WineCet4Word])],
  providers: [WordService],
  controllers: [WordController],
})
export class WordModule {}
