import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WineCet4Word } from './entity/wine-cet4-word';
import { Word } from './entity/word';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(Word)
    private wordRespository: Repository<Word>,
    @InjectRepository(WineCet4Word)
    private cet4Respository: Repository<WineCet4Word>,
  ) {
    this.cet4Respository.find().then((res) => {
      res.forEach((cet) => {
        wordRespository.save(Word.buildWithCet4(cet));
      });
    });
  }

  public findOne(id: number): Promise<Word> {
    return this.wordRespository.findOne(id);
  }

  public findCet(id: number): Promise<WineCet4Word> {
    return this.cet4Respository.findOne(id);
  }
}
