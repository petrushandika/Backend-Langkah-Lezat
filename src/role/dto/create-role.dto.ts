import { IsEnum } from 'class-validator';

export enum RoleType {
  ADMIN = 'ADMIN',
  CASHIER = 'CASHIER',
  CUSTOMER = 'CUSTOMER',
}

export class CreateRoleDto {
  @IsEnum(RoleType, {
    message: 'Role must be one of: ADMIN, CASHIER, CUSTOMER',
  })
  name: RoleType;
}
