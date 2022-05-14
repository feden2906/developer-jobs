import { Module } from '@nestjs/common';

import { ApplicantsModule } from './modules';

@Module({
  imports: [ApplicantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
