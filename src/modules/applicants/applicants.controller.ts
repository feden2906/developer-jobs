import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ApplicantsService } from './applicants.service';
import {
  ApplicantResponseDto,
  CreateApplicantDto,
  UpdateApplicantDto,
} from './dto';

@ApiTags('applicants')
@Controller('applicants')
export class ApplicantsController {
  constructor(private readonly applicantsService: ApplicantsService) {}

  @UsePipes(new ValidationPipe())
  @ApiOkResponse({ type: ApplicantResponseDto })
  @Post()
  create(@Body() dto: CreateApplicantDto) {
    return this.applicantsService.create(dto);
  }

  @ApiOkResponse({ isArray: true, type: ApplicantResponseDto })
  @Get()
  findAll() {
    return this.applicantsService.findAll();
  }

  @ApiOkResponse({ type: ApplicantResponseDto })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.applicantsService.findOne(+id);
  }

  @ApiOkResponse({ type: ApplicantResponseDto })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApplicantDto: UpdateApplicantDto,
  ) {
    return this.applicantsService.update(+id, updateApplicantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.applicantsService.remove(+id);
  }
}
