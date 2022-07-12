import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'img_tag',
})
export class ImgTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: number;

  @Column()
  tag: number;
}
