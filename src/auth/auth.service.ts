import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import Hasher from '../utils/Hasher';
import { User } from 'src/types/user-type';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import CONFIG from 'src/config/config';
import { RoleType } from '@prisma/client'; // Make sure RoleType is imported

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await Hasher.hashPassword(registerDto.password);

    const role = await this.prismaService.role.findFirst({
      where: {
        name: RoleType[registerDto.role],
      },
    });

    if (!role) {
      throw new Error('Role not found');
    }

    const createdUser: User = await this.prismaService.user.create({
      data: {
        ...registerDto,
        password: hashedPassword,
        role: {
          connect: { name: role.name },
        },
      },
    });

    return createdUser;
  }

  async login(loginDto: LoginDto) {
    const requestedUser: User = await this.prismaService.user.findFirst({
      where: {
        email: loginDto.email,
      },
    });

    if (!requestedUser) {
      return {
        status: 'Wrong username/password.',
      };
    }

    const isPasswordMatch = await Hasher.comparePassword(
      loginDto.password,
      requestedUser.password,
    );

    if (!isPasswordMatch) {
      return {
        status: 'Wrong username/password.',
      };
    }

    delete requestedUser.email;
    delete requestedUser.password;

    return {
      token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
    };
  }
}
