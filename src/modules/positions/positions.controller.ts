import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreatePositionDto, UpdatePositionDto } from './dto';
import { PositionsService } from './positions.service';
import { InjectSentry, SentryService } from '@ntegral/nestjs-sentry';

@Controller('positions')
export class PositionsController {
  constructor(
    @InjectSentry()
    private readonly sentry: SentryService,
    private readonly positionsService: PositionsService,
  ) {}

  @Post()
  create(@Body() dto: CreatePositionDto) {
    try {
      return this.positionsService.create(dto);
    } catch (e) {
      // this.sentry.error(e);
    }
  }

  @Get()
  findAll() {
    return this.positionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePositionDto: UpdatePositionDto,
  ) {
    return this.positionsService.update(+id, updatePositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionsService.remove(+id);
  }
}
