import { MinLength, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @MinLength(3)
  name: string;

  @MinLength(3)
  description: string;

  @IsOptional()
  image_link: string;
}
