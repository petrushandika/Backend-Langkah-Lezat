import { RoleType } from '@prisma/client';
import {
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
  IsEnum,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsEnum(RoleType)
  role: RoleType;

  @IsOptional()
  @IsArray()
  rolets: string[];
}
