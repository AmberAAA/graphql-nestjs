import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { concatAll, filter, from, map, take } from 'rxjs';
import { BrowserDriveService } from 'src/share/browser-drive.service';
import { Repository } from 'typeorm';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { Word } from './entities/word.entity';
import { WordType } from './enum/word-type.enum';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word) private readonly wordsRepository: Repository<Word>,
    @Inject('BROWSER_DRIVER') private readonly browser: BrowserDriveService,
  ) {}
  async create(createWordDto: CreateWordDto) {
    createWordDto.source = WordType.NEW;
    const word = await this.wordsRepository.save(createWordDto);
    const url = `http://www.iciba.com/word?w=${word.word}`;

    this.browser
      .handlePage(url)
      .pipe(
        filter((response) => response.url() === url),
        take(1),
        map((response) => response.text()),
        concatAll(),
      )
      .subscribe((e) => {
        console.log(e);
      });

    return word;
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
