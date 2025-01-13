import { CategoryType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsEnum(CategoryType)
  type: CategoryType;
}
