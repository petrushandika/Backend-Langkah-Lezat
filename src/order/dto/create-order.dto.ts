import { IsEnum, IsInt } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsInt()
  userId: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
