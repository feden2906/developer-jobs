import { Injectable } from '@nestjs/common';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';

import { SmsType } from '../../enums';
import { ApplicantRepository } from '../../repositories';
import { SmsHelperService } from '../sms/services';
import { CreateApplicantDto, UpdateApplicantDto } from './dto';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectSentry()
    private readonly sentry: SentryService,
    private readonly smsHelperService: SmsHelperService,
    private readonly applicantRepository: ApplicantRepository,
  ) {}

  async create(dto: CreateApplicantDto) {
    await this.smsHelperService.sendBaseSms('+380730201285', SmsType.welcome);
    return this.applicantRepository.create(dto);
  }

  findAll() {
    this.sentry.log('sms was sent++++++');
    this.sentry.error('sms was sent-----');
    return this.applicantRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} applicant`;
  }

  update(id: number, updateApplicantDto: UpdateApplicantDto) {
    return `This action updates a #${id} applicant`;
  }

  remove(id: number) {
    return `This action removes a #${id} applicant`;
  }
}


