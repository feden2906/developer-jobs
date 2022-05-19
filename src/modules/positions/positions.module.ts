import { Module } from '@nestjs/common';

import { RepositoryModule } from '../../repositories/@repository.module';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';

@Module({
  controllers: [PositionsController],
  imports: [RepositoryModule],
  providers: [PositionsService],
})
export class PositionsModule {}
