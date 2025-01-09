import { IsNumber } from 'class-validator';

export class CreateOrderDetailDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  menuId: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
