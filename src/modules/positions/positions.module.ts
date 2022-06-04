import { Module } from '@nestjs/common';

import { RepositoryModule } from '../../repositories';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';

@Module({
  controllers: [PositionsController],
  imports: [RepositoryModule],
  providers: [PositionsService],
})
export class PositionsModule {}
