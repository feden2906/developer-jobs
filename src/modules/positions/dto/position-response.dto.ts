import { ApiProperty } from '@nestjs/swagger';

export class PositionResponseDto {
  @ApiProperty({ example: 'nodejs', required: true })
  category: string;

  @ApiProperty({ example: 'middle', required: true })
  level: string;

  @ApiProperty({ example: 'EPAM', required: true })
  company: string;

  @ApiProperty({ example: 'We are developing a fintech ...', required: false })
  description?: string;

  @ApiProperty({ example: true, required: true })
  japaneseRequired: boolean;
}
