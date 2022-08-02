import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

enum UserSex {
  Male,
  Female,
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    unsigned: true,
  })
  id: number;
  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  age: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  sex: UserSex;

  @Column({
    type: 'varchar',
    length: '63',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  address: string;
}
