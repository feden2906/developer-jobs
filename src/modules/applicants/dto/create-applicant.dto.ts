import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicantDto {
  @ApiProperty({ example: 'feden@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: ['nodejs', 'react'] })
  @IsNotEmpty()
  categories: string[];

  @ApiProperty({ example: true })
  @IsBoolean()
  japaneseKnowledge: boolean;

  @ApiProperty({ example: 'middle' })
  @IsString()
  level: string;
}
