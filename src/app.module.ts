import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WineCet4Word } from './word/entity/wine-cet4-word';
import { Word } from './word/entity/word';
import { WordModule } from './word/word.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1024',
      database: 'lova_words_test',
      entities: [Word, WineCet4Word],
      synchronize: true,
      debug: true,
    }),
    WordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
