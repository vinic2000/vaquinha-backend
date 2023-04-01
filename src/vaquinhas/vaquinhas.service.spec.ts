import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './../prisma.service';
import { UsersService } from '../users/users.service';
import { VaquinhasService } from './vaquinhas.service';

describe('VaquinhasService', () => {
  let service: VaquinhasService;
  let prisma: PrismaService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VaquinhasService, 
        {provide: PrismaService,  useValue: {}},
        {provide: UsersService, useValue: {}}
      ],
    }).compile();

    service = module.get<VaquinhasService>(VaquinhasService);
    prisma = module.get<PrismaService>(PrismaService);

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
