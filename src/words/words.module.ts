import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';
import { ShareModule } from 'src/share/share.module';

@Module({
  controllers: [WordsController],
  providers: [WordsService],
  imports: [TypeOrmModule.forFeature([Word]), ShareModule],
})
export class WordsModule {}
