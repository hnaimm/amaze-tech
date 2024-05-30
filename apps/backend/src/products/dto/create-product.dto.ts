import { IsEnum, MinLength } from 'class-validator';

export class CreateProductDto {
  @MinLength(3)
  name: string;

  @IsEnum(['wearable', 'charger'], { message: 'invalid category value' })
  category: 'wearable' | 'charger';
}
