import { Controller, Get } from '@nestjs/common';
import { ajax } from 'rxjs/ajax';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/list')
  getList() {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
  }
}
