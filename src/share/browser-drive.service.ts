import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { concatMap, from, Observable } from 'rxjs';

@Injectable()
export class BrowserDriveService {
  private browserDrive: puppeteer.Browser;

  async init() {
    this.browserDrive = await puppeteer.launch({
      headless: true,
    });
  }

  handlePage(url: string) {
    return from(this.browserDrive.newPage()).pipe(
      concatMap((page) => {
        return new Observable<puppeteer.HTTPResponse>((subs) => {
          page.on('response', (e) => subs.next(e));
          page.on('load', () => {
            subs.complete();
            page.close();
          });
          page.goto(url);
        });
      }),
    );
  }
}
