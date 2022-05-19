import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ApplicantsModule, PositionsModule } from './modules';
import { EnvConfigService, MongooseConfigService } from './services';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    ApplicantsModule,
    PositionsModule,
  ],
  providers: [EnvConfigService, MongooseConfigService],
})
export class AppModule {}
