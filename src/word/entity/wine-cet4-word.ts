import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WineCet4Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cetWord: string;

  @Column()
  cet4Phonetic: string;

  @Column()
  cet4Translate: string;

  @Column()
  cet4Distortion: string;

  @Column()
  cet4Phrase: string;

  @Column()
  cet4_samples: string;
}
