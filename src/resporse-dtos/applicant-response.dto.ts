import { ApiProperty } from '@nestjs/swagger';

export class ApplicantResponseDto {
  @ApiProperty({ example: 'feden@gmail.com', required: true })
  email: string;

  @ApiProperty({ example: ['nodejs', 'react'], required: true })
  categories: string[];

  @ApiProperty({ example: true, required: true })
  japaneseKnowledge: boolean;

  @ApiProperty({ example: 'middle', required: true })
  level: string;
}
