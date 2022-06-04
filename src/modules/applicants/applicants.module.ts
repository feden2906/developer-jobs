import { Module } from '@nestjs/common';

import { RepositoryModule } from '../../repositories';
import { SmsModule } from '../sms/sms.module';
import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';

@Module({
  controllers: [ApplicantsController],
  imports: [RepositoryModule, SmsModule],
  providers: [ApplicantsService],
})
export class ApplicantsModule {}
