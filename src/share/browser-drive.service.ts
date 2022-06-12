import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { concatMap, from, Observable } from 'rxjs';

interface PayLoad<T> {
  page: puppeteer.Page;
  data: T;
}

@Injectable()
export class BrowserDriveService {
  private browserDrive: puppeteer.Browser;

  async init() {
    this.browserDrive = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    });
  }

  handlePage(url: string) {
    return from(this.browserDrive.newPage()).pipe(
      concatMap((page) => {
        return new Observable<PayLoad<puppeteer.HTTPResponse>>((subs) => {
          page.on('response', (e) => subs.next({ page, data: e }));
          page.on('load', () => {
            subs.complete();
            page.close();
          });
          page.goto(url);
        });
      }),
    );
  }

  async getPage() {
    return await this.browserDrive.newPage();
  }
}
