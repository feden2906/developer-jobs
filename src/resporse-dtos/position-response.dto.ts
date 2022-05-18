import { ApiProperty } from '@nestjs/swagger';

export class PositionResponseDto {
  @ApiProperty({ required: true, example: 'nodejs' })
  category: string;

  @ApiProperty({ required: true, example: 'middle' })
  level: string;

  @ApiProperty({ required: true, example: 'EPAM' })
  company: string;

  @ApiProperty({ required: false, example: 'We are developing a fintech ...' })
  description?: string;

  @ApiProperty({ required: true, example: true })
  japaneseRequired: boolean;
}
