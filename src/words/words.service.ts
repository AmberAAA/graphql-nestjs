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
    return this.wordsRepository.save(createWordDto);
  }

  async findAll() {
    const users = await this.wordsRepository.find();
    return users;
  }

  async findOne(id: number) {
    const user = await this.wordsRepository.findOne(id);
    return user;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return this.wordsRepository.update({ id }, updateWordDto);
  }

  async remove(id: number) {
    const word = await this.wordsRepository.findOne(id);
    if (word) {
      this.wordsRepository.remove(word);
    }
    return word;
  }
}
