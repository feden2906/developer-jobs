import { ApiProperty } from '@nestjs/swagger';

export class ApplicantResponseDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  _id: string;

  @ApiProperty({ example: 'feden@gmail.com' })
  email: string;

  @ApiProperty({ example: ['nodejs', 'react'] })
  categories: string[];

  @ApiProperty({ example: true })
  japaneseKnowledge: boolean;

  @ApiProperty({ example: 'middle' })
  level: string;
}
