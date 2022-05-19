import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantSchema } from './appicant.schema';
import { PositionSchema } from './position.schema';

const schemes = [
  { name: 'Position', schema: PositionSchema },
  { name: 'Applicant', schema: ApplicantSchema },
];

@Module({
  exports: [MongooseModule.forFeature(schemes)],
  imports: [MongooseModule.forFeature(schemes)],
})
export class SchemaModule {}
