import { CreateVaquinhaDto } from './dto/create-vaquinha.dto';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { VaquinhasService } from './vaquinhas.service';

@Controller('vaquinhas')
export class VaquinhasController {
  constructor(private readonly vaquinhasService: VaquinhasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: CreateVaquinhaDto) {
    return await this.vaquinhasService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async list() {
    return await this.vaquinhasService.list();
  }
}
