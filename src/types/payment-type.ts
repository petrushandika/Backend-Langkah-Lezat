import { PaymentStatus } from '@prisma/client';

export type Payment = {
  id: number;
  orderId: number;
  amount: number;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
};
