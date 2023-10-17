import {
  Controller,
  Body,
  Post,
  Param,
  Put,
  Get,
  Delete,
} from '@nestjs/common';
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
  async addMember(@Param() param, @Body() body) {
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

  @Delete(':id')
  async deleteVaquinha(@Param() param) {
    const { id } = param;
    const data = await this.vaquinhaService.deleteVaquinha(id);
    return data;
  }

  @Put(':id')
  async alterVaquinha(@Param() param, @Body() body: Vaquinha) {
    const { id } = param;
    const data = await this.vaquinhaService.alterVaquinha(id, body);
    return data;
  }
}
