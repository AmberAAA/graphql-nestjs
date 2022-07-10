import { Module } from '@nestjs/common';
import { ImgsService } from './imgs.service';
import { ImgsController } from './imgs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Img } from './entities/img.entity';

@Module({
  controllers: [ImgsController],
  providers: [ImgsService],
  imports: [TypeOrmModule.forFeature([Img])],
})
export class ImgsModule {}
