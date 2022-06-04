import { Injectable, Logger } from '@nestjs/common';
import twilio = require('twilio');
import { ConfigService } from '@nestjs/config';

import { EnvConfigService } from '../../../services';

@Injectable()
export class SmsSenderService {
  constructor(
    private configService: EnvConfigService = new EnvConfigService(),
  ) {}

  public async sendSms({
    phoneNumber,
    message,
  }: {
    phoneNumber: string;
    message: string;
  }): Promise<any> {
    try {
      const accountSid: string = this.configService.get('TWILIO_ACCOUNT_SID');
      const authToken: string = this.configService.get('TWILIO_AUTH_TOKEN');
      const from: string = this.configService.get('TWILIO_SENDER_NUMBER');
      console.log(accountSid, 'undefined1', authToken, 'undefined2');
      const client: twilio.Twilio = twilio(accountSid, authToken);

      const a = await client.messages.create({
        body: message,
        from,
        to: phoneNumber,
      });

      Logger.log(`Function:sending SMS, ${a}`);

      // .then((message) => {
      //   Logger.log(`Function:sending SMS, ${message}`);
      //   messageSid = message.sid;
      // })
      // .catch((error) => {
      //   Logger.error(
      //     `Function:sendSms, ${error}, Error sending sms for number`,
      //   );
      // });
    } catch (error) {
      Logger.error(error);
    }

    return;
  }
}
