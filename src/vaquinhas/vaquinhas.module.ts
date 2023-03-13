import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { VaquinhasService } from './vaquinhas.service';
import { VaquinhasController } from './vaquinhas.controller';

@Module({
  controllers: [VaquinhasController],
  providers: [VaquinhasService, PrismaService, UsersService],
})
export class VaquinhasModule {}
