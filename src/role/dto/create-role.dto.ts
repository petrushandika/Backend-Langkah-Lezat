import { RoleType } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateRoleDto {
  @IsEnum(RoleType)
  name: RoleType;
}
