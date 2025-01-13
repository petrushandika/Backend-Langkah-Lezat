import { CategoryType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsOptional()
  @IsEnum(CategoryType)
  type?: CategoryType;
}
