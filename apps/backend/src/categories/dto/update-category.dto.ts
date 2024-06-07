import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsOptional, MinLength } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsOptional()
  @MinLength(3)
  name: string;

  @IsOptional()
  @MinLength(3)
  description: string;

  @IsOptional()
  image_link: string;
}
