import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePositionDto {
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  level: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  japaneseRequired: boolean;
}
