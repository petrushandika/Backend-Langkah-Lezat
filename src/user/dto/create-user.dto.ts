import { IsString, IsOptional } from 'class-validator';

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
