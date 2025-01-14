import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { CreateLocationDto } from './dto/create-location.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLoggedUser(id: number) {
    const loggedUser = await this.prismaService.user.findFirst({
      where: { id },
    });

    delete loggedUser.password;
    delete loggedUser.createdAt;
    delete loggedUser.updatedAt;

    return loggedUser;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findFirst({
      where: { id },
      include: {
        profile: {
          include: {
            location: true,
          },
        },
      },
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }

  async createProfile(userId: number, createProfileDto: CreateProfileDto) {
    const profile = await this.prismaService.profile.create({
      data: {
        ...createProfileDto,
        userId: userId,
      },
    });

    return profile;
  }

  async updateProfile(userId: number, createProfileDto: CreateProfileDto) {
    const updatedProfile = await this.prismaService.profile.update({
      where: { userId },
      data: {
        ...createProfileDto,
      },
    });

    return updatedProfile;
  }

  async createLocation(
    profileId: number,
    createLocationDto: CreateLocationDto,
  ) {
    const location = await this.prismaService.location.create({
      data: {
        ...createLocationDto,
        profileId: Number(profileId),
      },
    });

    return location;
  }
}
