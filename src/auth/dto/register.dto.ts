import { RoleType } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(RoleType)
  role: RoleType;
}
