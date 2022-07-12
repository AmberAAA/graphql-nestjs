import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPage, IPageQuery } from 'src/global.type';
import { ILike, IsNull, Like, Not, Repository } from 'typeorm';
import { Img } from './entities/img.entity';
import { Tag } from './entities/tag.entity';
import { IGetTagPageCmd } from './types';

@Injectable()
export class ImgsService {
  constructor(
    @InjectRepository(Img) private readonly imgRepository: Repository<Img>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  findOne(id: number) {
    return this.imgRepository.findOne(id);
  }

  async findByPage(query: IPageQuery): Promise<IPage<Img>> {
    const [list, count] = await this.imgRepository.findAndCount({
      skip: (query.page - 1) * query.size,
      take: query.size,
    });
    return {
      ...query,
      total: count,
      data: list,
    };
  }

  async getTagPage({
    name = undefined,
    ...queryPage
  }: IGetTagPageCmd): Promise<IPage<Tag>> {
    const [data, total] = await this.tagRepository.findAndCount({
      skip: (queryPage.page - 1) * +queryPage.size,
      take: +queryPage.size,
      where: {
        tag: name ? Like('%' + name + '%') : Not(IsNull()),
      },
    });
    return {
      ...queryPage,
      data,
      total,
    };
  }
}
