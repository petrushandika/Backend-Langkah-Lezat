import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createOrderDetailDto: CreateOrderDetailDto) {
    return await this.prismaService.orderDetail.create({
      data: {
        ...createOrderDetailDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.orderDetail.findMany({
      include: {
        order: true,
        menu: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.orderDetail.findUnique({
      where: { id },
      include: {
        order: true,
        menu: true,
      },
    });
  }

  async update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return await this.prismaService.orderDetail.update({
      where: { id },
      data: {
        ...updateOrderDetailDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.orderDetail.delete({
      where: { id },
    });
  }
}
