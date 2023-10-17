import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() request: CreateUserDto) {
    const data = await this.usersService.create(request);
    return data;
  }

  @Get(':id')
  async getId(@Param('id') id: any) {
    const data = await this.usersService.findById(id);
    return data;
  }
}
