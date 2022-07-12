import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Page } from 'src/global.type';
import { In, IsNull, Like, Not, Repository } from 'typeorm';
import { Img } from './entities/img.entity';
import { ImgTag } from './entities/imgTag.entity';
import { Tag } from './entities/tag.entity';
import { GetImgPageCmd, GetTagPageCmd } from './types';

@Injectable()
export class ImgsService {
  constructor(
    @InjectRepository(Img) private readonly imgRepository: Repository<Img>,
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
    @InjectRepository(ImgTag)
    private readonly imgTagRepository: Repository<ImgTag>,
  ) {}

  findOne(id: number) {
    return this.imgRepository.findOne(id);
  }

  async findByPage(query: GetImgPageCmd): Promise<Page<Img>> {
    const ids: number[] = [];
    if (query.tag) {
      const imgTags = await this.imgTagRepository.find({
        where: {
          tag: query.tag,
        },
      });
      imgTags.forEach((it) => ids.push(it.img));
    }
    const [list, count] = await this.imgRepository.findAndCount({
      skip: (query.page - 1) * query.size,
      take: query.size,
      where: {
        id: ids.length ? In(ids) : Not(IsNull()),
      },
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
  }: GetTagPageCmd): Promise<Page<Tag>> {
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
