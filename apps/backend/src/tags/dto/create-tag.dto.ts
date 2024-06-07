import { MinLength } from 'class-validator';

export class CreateTagDto {
  @MinLength(3)
  name: string;
}
