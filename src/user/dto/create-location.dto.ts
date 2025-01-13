import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  postalCode: number;

  @IsString()
  cityDistrict: string;

  @IsNumber()
  profileId: number;
}
