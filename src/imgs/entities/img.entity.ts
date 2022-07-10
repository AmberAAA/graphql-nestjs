import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class ImgMeta {
  tags: string[];
}

@Entity({
  name: 'img',
})
export class Img {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    name: 'base_path',
  })
  basePath: string;

  @Column({
    name: 'dir_path',
  })
  dirPath: string;

  @Column()
  type: string;

  @Column({
    type: 'json',
  })
  meta: ImgMeta;

  @Column()
  count: number;

  @Column()
  suffix: string;
}
