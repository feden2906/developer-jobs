import { Module } from '@nestjs/common';

import { RepositoryModule } from '../../repositories/@repository.module';
import { ApplicantsController } from './applicants.controller';
import { ApplicantsService } from './applicants.service';

@Module({
  controllers: [ApplicantsController],
  imports: [RepositoryModule],
  providers: [ApplicantsService],
})
export class ApplicantsModule {}
