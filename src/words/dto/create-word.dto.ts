import { WordType } from '../enum/word-type.enum';

export class CreateWordDto {
  word: string;
  phonetic?: string;
  translate?: string;
  phrase?: string;
  samples?: string;
  source: WordType;
}
