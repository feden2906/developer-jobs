import { Module } from '@nestjs/common';

import { ApplicantRepository } from './applicant.repository';
import { PositionRepository } from './position.repository';
import { SchemaModule } from './schema/@schema.module';

const repositories = [ApplicantRepository, PositionRepository];

@Module({
  exports: [...repositories],
  imports: [SchemaModule],
  providers: [...repositories],
})
export class RepositoryModule {}
