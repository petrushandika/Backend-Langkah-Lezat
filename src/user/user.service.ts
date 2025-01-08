import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prismaService.user.findMany({
      include: { role: true },
    });
  }

  async findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
