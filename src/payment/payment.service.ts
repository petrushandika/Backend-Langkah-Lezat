import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderService } from 'src/order/order.service';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly orderService: OrderService,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const { orderId } = createPaymentDto;

    const order = await this.orderService.findOne(orderId);
    if (!order) {
      throw new NotFoundException(`Order with ID ${orderId} not found`);
    }

    const payment = await this.prismaService.payment.create({
      data: {
        ...createPaymentDto,
        status: PaymentStatus.PENDING,
      },
    });

    return payment;
  }
}
