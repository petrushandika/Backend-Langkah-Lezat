import { IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber()
  userId: number;
}
