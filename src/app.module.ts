import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShareModule } from './share/share.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
    }),
    ShareModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
