import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

import {
  CategoryEnum,
  FrameworkEnum,
  ProgrammingLanguageEnum,
  SkillLevelEnum,
} from '../../../enums';
import { LanguageDto } from './common-applicant.dto';

export class CreateApplicantDto {
  @ApiProperty({ example: 'feden@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Frontend' })
  @IsNotEmpty()
  @IsEnum(CategoryEnum)
  category: string[];

  @ApiProperty({ type: () => [LanguageDto] })
  @IsNotEmpty()
  @IsArray()
  languages: LanguageDto[];

  @ApiProperty({ example: 'Maksym' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'QWEqwe123!' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ example: ['NestJS', 'Angular'] })
  @IsNotEmpty()
  @IsArray()
  @IsEnum(FrameworkEnum, { each: true })
  mainStack: FrameworkEnum[];

  @ApiProperty({ example: 'middle' })
  @IsNotEmpty()
  @IsEnum(SkillLevelEnum)
  level: SkillLevelEnum;

  @ApiProperty({ example: ['JavaScript'] })
  @IsNotEmpty()
  @IsEnum(ProgrammingLanguageEnum, { each: true })
  programmingLanguages: ProgrammingLanguageEnum[];
}
