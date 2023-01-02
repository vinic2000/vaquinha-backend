import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from './../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: PrismaService;

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
      findFirst: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all user', async () => {
      const users = await service.findAll();

      expect(users).toEqual(fakeUsers);
      expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('findOne', () => {
    it('should return one user send a Id', async () => {
      const user = await service.findOne('fakeId');

      expect(user).toEqual(fakeUsers[0]);
      expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({
        where: {
          id: 'fakeId',
        },
      });
    });
  });

  it('update', async () => {
    const user = await service.update('fakeUser', {
      email: 'novo@email.com',
      name: 'FakeUpdatedUser',
      password: 'FakeUpdated1234',
    });

    expect(user).toEqual(fakeUsers[0]);
    expect(prisma.user.findUnique).toHaveBeenCalledTimes(1);
    expect(prisma.user.update).toHaveBeenCalledTimes(1);
  });

  it('delete', async () => {
    const user = await service.remove('FakeUser');

    expect(user).toEqual(fakeUsers[0]);
    expect(prisma.user.delete).toHaveBeenCalledTimes(1);
  });

  it('create', async () => {
    const newUser = await service.create({
      name: 'New Fake user',
      email: 'fake@email.com',
      password: 'fake123456',
    });

    expect(newUser).toEqual(fakeUsers[0]);
    expect(prisma.user.findFirst).toHaveBeenCalledTimes(1);
    expect(prisma.user.create).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
