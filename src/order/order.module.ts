import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MidtransService } from 'src/midtrans/midtrans.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, MidtransService],
})
export class OrderModule {}
