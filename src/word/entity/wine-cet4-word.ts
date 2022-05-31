import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WineCet4Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'cet4_word',
    type: 'varchar',
    length: 255,
  })
  public cet4Word: string;

  @Column({
    name: 'cet4_phonetic',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  cet4Phonetic?: string;

  @Column({
    name: 'cet4_translate',
    type: 'text',
  })
  cet4Translate?: string;

  @Column({
    name: 'cet4_distortion',
    type: 'text',
  })
  cet4Distortion?: string;

  @Column({
    name: 'cet4_phrase',
    type: 'text',
  })
  cet4Phrase?: string;

  @Column({
    name: 'cet4_samples',
    type: 'text',
  })
  cet4Samples?: string;
}
