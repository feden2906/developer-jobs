import { ApiProperty } from '@nestjs/swagger';

export class ApplicantResponseDto {
  @ApiProperty({ required: true, example: 'feden@gmail.com' })
  email: string;

  @ApiProperty({ required: true, example: ['nodejs', 'react'] })
  categories: string[];

  @ApiProperty({ required: true, example: true })
  japaneseKnowledge: boolean;

  @ApiProperty({ required: true, example: 'middle' })
  level: string;
}
