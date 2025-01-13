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
        orderDetail: true,
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prismaService.order.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        orderDetail: true,
      },
    });

    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.prismaService.order.update({
      where: {
        id,
      },
      data: {
        ...updateOrderDto,
      },
    });

    return order;
  }

  async remove(id: number) {
    const order = await this.prismaService.order.delete({
      where: {
        id,
      },
    });

    return order;
  }
}
