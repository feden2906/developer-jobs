import { Injectable } from '@nestjs/common';

import { SmsType } from '../../../enums';

@Injectable()
export class SmsTemplatesProvider {
  private smsTemplates = {
    [SmsType.welcome]: ({ name }): string => {
      return `Привіт, ${name}, списання у розмірі 50$ для Amazon проведено успішно. Гарного дня!`;
    },
  };

  public getTemplate(type): (data: object) => string {
    return this.smsTemplates[type];
  }
}
