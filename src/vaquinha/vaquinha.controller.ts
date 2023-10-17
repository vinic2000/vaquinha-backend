import { Controller, Body, Post, Param, Put, Get } from '@nestjs/common';
import { VaquinhaService } from './vaquinha.service';
import { Vaquinha } from './schema/vaquinha.schema';

@Controller('vaquinha')
export class VaquinhaController {
  constructor(private readonly vaquinhaService: VaquinhaService) {}

  @Post()
  async createVaquinha(@Body() body: Vaquinha) {
    const data = await this.vaquinhaService.create(body);
    return data;
  }

  @Get(':id')
  async findById(@Param() param) {
    const { id } = param;
    const data = this.vaquinhaService.find(id);
    return data;
  }

  @Put('addmembrer/:id')
  async findByiD(@Param() param, @Body() body) {
    const { id } = param;
    const { member } = body;

    const data = await this.vaquinhaService.addMember(id, member);
    return data;
  }

  @Put('removeMember/:id')
  async removeMember(@Param() param, @Body() body) {
    const { id } = param;
    const { member } = body;

    const data = await this.vaquinhaService.removeMember(id, member);

    return data;
  }
}
