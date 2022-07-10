import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OssService } from './share/oss.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private oss: OssService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sign')
  getSign(): string {
    return this.oss.sign('README.md');
  }

  @Get('up')
  getup() {
    return this.oss.listBuck();
  }
}
