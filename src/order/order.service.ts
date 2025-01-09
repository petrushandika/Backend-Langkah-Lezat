import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return await this.prismaService.order.create({
      data: {
        ...createOrderDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.order.findMany({
      include: {
        user: true,
        orderDetails: true,
        payments: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.order.findFirst({
      where: {
        id,
      },
      include: {
        user: true,
        orderDetails: true,
        payments: true,
      },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        ...updateOrderDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.order.delete({
      where: {
        id,
      },
    });
  }
}
