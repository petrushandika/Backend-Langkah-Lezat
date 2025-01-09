import { PaymentStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsEnum(PaymentStatus)
  role: PaymentStatus;
}
