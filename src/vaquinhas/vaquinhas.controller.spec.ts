import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './../users/users.service';
import { PrismaService } from './../prisma.service';
import { VaquinhasController } from './vaquinhas.controller';
import { VaquinhasService } from './vaquinhas.service';

describe('VaquinhasController', () => {
  let controller: VaquinhasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaquinhasController],
      providers: [VaquinhasService, UsersService, PrismaService],
    }).compile();

    controller = module.get<VaquinhasController>(VaquinhasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
