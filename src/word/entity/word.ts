import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WordSourceType } from '../enum/word-source-type.enum';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  phonetic: string;

  @Column()
  translate: string;

  @Column()
  phrase: string;

  @Column()
  samples: string;

  @Column()
  source: WordSourceType;
}
