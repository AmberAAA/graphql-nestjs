import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { Word } from './entities/word.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word) private readonly wordsRepository: Repository<Word>,
  ) {}
  create(createWordDto: CreateWordDto) {
    return 'This action adds a new word';
  }

  findAll() {
    return `This action returns all words`;
  }

  findOne(id: number) {
    console.log('12312321');
    return this.wordsRepository.findOne(id);
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
