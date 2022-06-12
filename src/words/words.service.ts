import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { concatAll, filter, map, take } from 'rxjs';
import { BrowserDriveService } from 'src/share/browser-drive.service';
import { OssService } from 'src/share/oss.service';
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
    private readonly oss: OssService,
  ) {}
  async create(createWordDto: CreateWordDto): Promise<Word> {
    createWordDto.source = WordType.NEW;
    const word = await this.wordsRepository.save(createWordDto);
    const url = `http://www.iciba.com/word?w=${word.word}`;

    this.browser
      .handlePage(url)
      .pipe(
        filter((response) => response.data.url() === url),
        // map((response) => response.data.text()),
        // concatAll(),
      )
      .subscribe((e) => {
        if (e.data.url() === url) {
        }
      });

    return word;
  }

  async findAll(): Promise<Word[]> {
    const users = await this.wordsRepository.find();
    return users;
  }

  async findOne(id: number): Promise<Word> {
    const user = await this.wordsRepository.findOne(id);
    return user;
  }

  async update(id: number, updateWordDto: UpdateWordDto): Promise<boolean> {
    const a = await this.wordsRepository.update({ id }, updateWordDto);
    return !!a.affected;
  }

  async remove(id: number): Promise<Word> {
    const word = await this.wordsRepository.findOne(id);
    if (word) {
      this.wordsRepository.remove(word);
    }
    return word;
  }
}
