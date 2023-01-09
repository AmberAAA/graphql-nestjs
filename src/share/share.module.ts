import { Module } from '@nestjs/common';
import DnsService from './dns.service';

@Module({
  providers: [DnsService],
})
export class ShareModule {}
