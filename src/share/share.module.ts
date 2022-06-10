import { Module } from '@nestjs/common';
import { BrowserDriveService } from './browser-drive.service';

@Module({
  providers: [
    {
      provide: 'BROWSER_DRIVER',
      useFactory: async () => {
        const browserDrive = new BrowserDriveService();
        await browserDrive.init();
        return browserDrive;
      },
    },
  ],
  exports: ['BROWSER_DRIVER'],
})
export class ShareModule {}
