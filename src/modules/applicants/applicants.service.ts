import { Injectable } from '@nestjs/common';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';

import { ApplicantRepository } from '../../repositories';
import { CreateApplicantDto, UpdateApplicantDto } from './dto';

@Injectable()
export class ApplicantsService {
  constructor(
    @InjectSentry()
    private readonly sentry: SentryService,
    private readonly applicantRepository: ApplicantRepository,
  ) {}

  create(dto: CreateApplicantDto) {
    return this.applicantRepository.create(dto);
  }

  findAll() {
    this.sentry.log('sms was sent');
    this.sentry.error('sms was sent');
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
