import { ApiProperty } from '@nestjs/swagger';
import { WordType } from '../enum/word-type.enum';

export class CreateWordDto {
  @ApiProperty()
  word: string;

  @ApiProperty({ required: false })
  phonetic?: string;

  @ApiProperty({ required: false })
  translate?: string;

  @ApiProperty({ required: false })
  phrase?: string;

  @ApiProperty({ required: false })
  samples?: string;

  @ApiProperty({ required: false, enum: [WordType.NEW], default: WordType.NEW })
  source?: WordType = WordType.NEW;
}
