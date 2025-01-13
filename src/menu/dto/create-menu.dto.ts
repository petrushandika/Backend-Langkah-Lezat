import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  offerPrice?: number;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  categoryId: number;
}
