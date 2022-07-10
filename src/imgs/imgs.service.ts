import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Img } from './entities/img.entity';

@Injectable()
export class ImgsService {
  constructor(
    @InjectRepository(Img) private readonly imgRepository: Repository<Img>,
  ) {}

  findOne(id: number) {
    return this.imgRepository.findOne(id);
  }

  async findByPage(page: number, size: number) {
    // const count = this.imgRepository.count();
    const [list, count] = await this.imgRepository.findAndCount({
      skip: (page - 1) * size,
      take: size,
    });
    return {
      page,
      size,
      total: count,
      data: list,
    };
  }
}
