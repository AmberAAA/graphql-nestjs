import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { WordType } from '../enum/word-type.enum';

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
    nullable: true,
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
  source: WordType;
}
