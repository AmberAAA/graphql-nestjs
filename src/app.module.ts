import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { WordsModule } from './words/words.module';
import { Word } from './words/entities/word.entity';
import { ShareModule } from './share/share.module';
import { ImgsModule } from './imgs/imgs.module';
import { Img } from './imgs/entities/img.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Tag } from './imgs/entities/tag.entity';
import { ImgTag } from './imgs/entities/imgTag.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? +process.env.MYSQL_PORT : 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: false,
      debug: true,
      entities: [Word, Img, Tag, ImgTag],
    }),
    WordsModule,
    ShareModule,
    ImgsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
})
export class AppModule {}
