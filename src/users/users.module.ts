import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, JwtStrategy],
})
export class UsersModule {}
