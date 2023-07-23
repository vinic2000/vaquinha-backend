import { PrismaService } from './../prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (userExist) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userExist = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExist) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    const userExist = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExist) {
      throw new HttpException('User don´t exist', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.delete({ where: { id: id } });
  }


  async remember(email: string) {

    return await this.prisma.user.findFirst({
      where: {
        email: email
      }
    })
  }
}
