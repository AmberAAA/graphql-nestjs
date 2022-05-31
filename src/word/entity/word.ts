import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WordSourceType } from '../enum/word-source-type.enum';
import { WineCet4Word } from './wine-cet4-word';

@Entity({
  name: 'word',
})
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  word: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  phonetic: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  translate?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  phrase?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  samples?: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  source: WordSourceType;

  static buildWithCet4(cet: WineCet4Word) {
    const word = new Word();
    word.phonetic = cet.cet4Phonetic;
    word.phrase = cet.cet4Phrase;
    word.samples = cet.cet4Samples;
    word.source = WordSourceType.CET4;
    word.translate = cet.cet4Translate;
    word.word = cet.cet4Word;
    return word;
  }
}
