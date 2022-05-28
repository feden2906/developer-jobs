import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SentryModule } from '@ntegral/nestjs-sentry';

import { ApplicantsModule, PositionsModule } from './modules';
import { EnvConfigService, MongooseConfigService } from './services';
import { SentryConfigService } from './services/sentryConfig.service';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SentryModule.forRootAsync({
      useClass: SentryConfigService,
    }),
    ApplicantsModule,
    PositionsModule,
  ],
  providers: [EnvConfigService, MongooseConfigService],
})
export class AppModule {}
