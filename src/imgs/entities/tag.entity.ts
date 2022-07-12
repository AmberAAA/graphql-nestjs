import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'tag_view',
})
export class Tag {
  @PrimaryGeneratedColumn({
    name: 'tag_id',
  })
  id: number;
  @Column({
    name: 'tag_name',
  })
  tag: string;
}
