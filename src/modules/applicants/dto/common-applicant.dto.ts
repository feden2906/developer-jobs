import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { LanguageEnum, LanguageLevelEnum } from '../../../enums';

export class LanguageDto {
  @ApiProperty({ example: 'english' })
  @IsNotEmpty()
  @IsString()
  @IsEnum(LanguageEnum)
  language: string;

  @ApiProperty({ example: 'B1' })
  @IsNotEmpty()
  @IsString()
  @IsEnum(LanguageLevelEnum)
  level: string;
}
