import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import Hasher from '../utils/Hasher';
import { User } from 'src/types/user-type';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import CONFIG from 'src/config/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await Hasher.hashPassword(registerDto.password);

    const createdUser: User = await this.prismaService.user.create({
      data: {
        ...registerDto,
        password: hashedPassword,
        role: {
          connectOrCreate: {
            where: { name: registerDto.role },
            create: { name: registerDto.role },
          },
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
    delete requestedUser.phone;
    delete requestedUser.password;

    return {
      token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
    };
  }
}
