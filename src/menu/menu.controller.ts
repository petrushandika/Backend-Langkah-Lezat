import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() createMenuDto: CreateMenuDto) {
    return await this.menuService.create(createMenuDto);
  }

  @Get()
  async findAll() {
    return await this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.menuService.findOne(Number(id));
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateMenuDto: UpdateMenuDto) {
    return await this.menuService.update(Number(id), updateMenuDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.menuService.remove(Number(id));
  }
}
