import { PaymentStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  bank: string;

  @IsNumber()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
