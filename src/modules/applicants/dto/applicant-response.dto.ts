import { ApiProperty } from '@nestjs/swagger';

import { FrameworkEnum, ProgrammingLanguageEnum } from '../../../enums';
import { LanguageDto } from './common-applicant.dto';

export class ApplicantResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  _id: string;

  @ApiProperty({ example: 'feden@gmail.com' })
  email: string;

  @ApiProperty({ example: ['nodejs', 'react'] })
  categories: string[];

  @ApiProperty()
  languages: LanguageDto[];

  @ApiProperty({ example: 'Maksym' })
  name: string;

  @ApiProperty({ example: 'QWEqwe123!' })
  password: string;

  @ApiProperty({ example: ['NestJS', 'Angular'] })
  mainStack: FrameworkEnum[];

  @ApiProperty({ example: ['JavaScript'] })
  programmingLanguages: ProgrammingLanguageEnum[];
}
