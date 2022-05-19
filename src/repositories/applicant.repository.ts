import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IApplicant } from '../interfaces';

@Injectable()
export class ApplicantRepository {
  constructor(
    @InjectModel('Applicant')
    private readonly applicantModel: Model<IApplicant>,
  ) {}

  public async create(dto) {
    return this.applicantModel.create(dto);
  }

  public async find() {
    return this.applicantModel.find();
  }
}
