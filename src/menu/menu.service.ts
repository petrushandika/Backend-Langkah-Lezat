import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMenuDto: CreateMenuDto) {
    return await this.prismaService.menu.create({
      data: {
        ...createMenuDto,
      },
    });
  }

  async findAll() {
    return await this.prismaService.menu.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.menu.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    return await this.prismaService.menu.update({
      where: {
        id,
      },
      data: {
        ...updateMenuDto,
      },
    });
  }

  async remove(id: number) {
    return await this.prismaService.menu.delete({
      where: {
        id,
      },
    });
  }
}
