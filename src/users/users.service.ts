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
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
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
