import { Module } from '@nestjs/common';
import { ImgsService } from './imgs.service';
import { ImgsController } from './imgs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Img } from './entities/img.entity';
import { Tag } from './entities/tag.entity';
import { ImgTag } from './entities/imgTag.entity';

@Module({
  controllers: [ImgsController],
  providers: [ImgsService],
  imports: [TypeOrmModule.forFeature([Img, Tag, ImgTag])],
})
export class ImgsModule {}
