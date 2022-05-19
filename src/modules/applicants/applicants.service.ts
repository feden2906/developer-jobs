import { Injectable } from '@nestjs/common';

import { ApplicantRepository } from '../../repositories';
import { CreateApplicantDto, UpdateApplicantDto } from './dto';

@Injectable()
export class ApplicantsService {
  constructor(private readonly applicantRepository: ApplicantRepository) {}

  create(dto: CreateApplicantDto) {
    return this.applicantRepository.create(dto);
  }

  findAll() {
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
