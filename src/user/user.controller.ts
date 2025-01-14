import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { CreateProfileDto } from './dto/create-profile.dto';
import { CreateLocationDto } from './dto/create-location.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('logged')
  async getLoggedUser(@Res() res: Response) {
    const loggedUserId = res.locals.user.id;
    const loggedUser = await this.userService.getLoggedUser(loggedUserId);
    return res.status(200).send(loggedUser);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Post('profile/:id')
  async createProfile(
    @Param('id') id: number,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    const profile = await this.userService.createProfile(
      Number(id),
      createProfileDto,
    );
    return { profile };
  }

  @Patch('profile/:id')
  async updateProfile(
    @Param('id') id: number,
    @Body() createLocationDto: CreateLocationDto,
  ) {
    const location = await this.userService.createLocation(
      Number(id),
      createLocationDto,
    );
    return { location };
  }

  @Post('location/:id')
  async createLocation(
    @Param('id') id: number,
    @Body() createLocationDto: CreateLocationDto,
  ) {
    const location = await this.userService.createLocation(
      Number(id),
      createLocationDto,
    );
    return { location };
  }
}
