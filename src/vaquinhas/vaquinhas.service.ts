import { CreateVaquinhaDto } from './dto/create-vaquinha.dto';
import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import Vaquinha from './entities/vaquinha';

@Injectable()
export class VaquinhasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UsersService,
  ) {}
  async create({
    name,
    price,
    userAdmin,
    memberCount,
  }: CreateVaquinhaDto): Promise<any> {
    const user = await this.userService.findOne(userAdmin);

    const vaquinha = await this.prisma.vaquinha.create({
      data: {
        name: name,
        price: price > 0 ? price : 0,
        userId: user.id,
        memberCount: memberCount,
      },
    });

    return vaquinha;
  }

  async list() {
    return this.prisma.vaquinha.findMany();
  }
}
