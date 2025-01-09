import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Controller('order-detail')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Post()
  async create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return await this.orderDetailService.create(createOrderDetailDto);
  }

  @Get()
  async findAll() {
    return await this.orderDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.orderDetailService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return await this.orderDetailService.update(
      Number(id),
      updateOrderDetailDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.orderDetailService.remove(Number(id));
  }
}
