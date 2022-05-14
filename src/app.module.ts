import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsModule, PositionsModule } from './modules';
import { EnvConfigService, MongooseConfigService } from './services';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    ApplicantsModule,
    PositionsModule,
  ],
  controllers: [],
  providers: [EnvConfigService, MongooseConfigService],
})
export class AppModule {}
