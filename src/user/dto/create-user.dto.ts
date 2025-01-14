import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDto } from './create-profile.dto';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
