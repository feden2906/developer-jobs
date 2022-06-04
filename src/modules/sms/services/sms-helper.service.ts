import { Injectable } from '@nestjs/common';

import { SmsSenderService } from './sms-sendler.service';
import { SmsTemplatesProvider } from './sms-templates.provider';

@Injectable()
export class SmsHelperService {
  constructor(
    private readonly senderService: SmsSenderService,
    private readonly smsTemplatesProvider: SmsTemplatesProvider,
  ) {}

  public async sendBaseSms(phoneNumber, type): Promise<boolean | undefined> {
    const message = this.smsTemplatesProvider.getTemplate(type)({
      name: 'Alexander',
    });

    return this.senderService.sendSms({ message, phoneNumber });
  }
}
