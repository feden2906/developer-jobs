import { Module } from '@nestjs/common';
import { ApplicantsModule } from './modules/applicants/applicants.module';

@Module({
  imports: [ApplicantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
