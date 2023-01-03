import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: PrismaService;
  let jwtService: JwtService;

  const fakeUsers = [
    {
      id: 'fakeId',
      name: 'Fakeuser',
      email: 'fake@email.com',
      password: 'fake123456',
    },
  ];

  const prismaMock = {
    user: {
      create: jest.fn().mockReturnValue(fakeUsers[0]),
      findMany: jest.fn().mockReturnValue(fakeUsers),
      findUnique: jest.fn().mockReturnValue(fakeUsers[0]),
      update: jest.fn().mockReturnValue(fakeUsers[0]),
      delete: jest.fn().mockReturnValue(fakeUsers[0]),
      findFirst: jest.fn().mockReturnValue(fakeUsers[0]),
    },
  };

  const jwtMock = {
    sign: jest.fn().mockReturnValue('tokenfake'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: prismaMock },
        { provide: JwtService, useValue: jwtMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<PrismaService>(PrismaService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should do login send email and password', async () => {
    const user = await service.authenticate({
      email: 'fake@email.com',
      password: 'fake123456',
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('token');

    expect(prisma.user.findFirst).toHaveBeenCalledTimes(1);
  });
});
