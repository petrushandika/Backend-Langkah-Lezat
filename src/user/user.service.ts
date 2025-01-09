import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLoggedUser(id: number) {
    const loggedUser = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    delete loggedUser.password;
    delete loggedUser.createdAt;
    delete loggedUser.updatedAt;

    return loggedUser;
  }

  async findOne(id: number) {
    const rawUser = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    return {
      ...rawUser,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
