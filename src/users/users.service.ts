import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page, PageQuery } from '../global.type';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { mock, Random } from 'mockjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.save(createUserDto);
    console.log(user);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository
      .createQueryBuilder()
      .where({
        id,
      })
      .update(updateUserDto)
      .execute();
    const user = await this.findOne(id);
    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.find({ id });
    if (user.length) {
      await this.userRepository.remove(user);
      return user[0];
    } else {
      return null;
    }
  }

  async findByPage(query: PageQuery): Promise<Page<User>> {
    const [list, count] = await this.userRepository.findAndCount({
      skip: (query.page - 1) * query.size,
      take: query.size,
    });
    return {
      ...query,
      total: count,
      data: list,
    };
  }

  async mockUser() {
    const list: CreateUserDto[] = [];
    for (let i = 0; i < 8792; i++) {
      list.push({
        name: Random.cname(),
        age: Math.floor(Math.random() * 80 + 12),
        sex: Math.floor(Math.random() * 2),
        email: Random.email(),
        address: Random.city(),
      });
    }
    await this.userRepository.save(list);
    return true;
    // return list;
  }
}
