import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return this.prismaService.role.create({
      data: createRoleDto,
    });
  }

  async findOne(id: number) {
    return this.prismaService.role.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prismaService.role.update({
      where: { id },
      data: updateRoleDto,
    });
  }
}
