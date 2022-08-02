import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @ApiProperty({
    required: true,
    description: '姓名',
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  @ApiProperty({
    description: '年龄',
  })
  age: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  @ApiProperty({
    description: '性别 0-男；1-女',
  })
  sex: UserSex;

  @Column({
    type: 'varchar',
    length: '63',
    nullable: false,
  })
  @ApiProperty({
    description: '邮件',
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  @ApiProperty({
    description: '地址',
  })
  address: string;
}
