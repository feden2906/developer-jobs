import { Module } from '@nestjs/common';

import { EnvConfigService } from '../../services';
import {
  SmsHelperService,
  SmsSenderService,
  SmsTemplatesProvider,
} from './services';

@Module({
  controllers: [],
  exports: [SmsTemplatesProvider, SmsHelperService],
  imports: [],
  providers: [
    SmsTemplatesProvider,
    EnvConfigService,
    SmsSenderService,
    SmsHelperService,
  ],
})
export class SmsModule {}
