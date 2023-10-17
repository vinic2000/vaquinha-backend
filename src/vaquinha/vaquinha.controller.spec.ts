import { Test, TestingModule } from '@nestjs/testing';
import { VaquinhaController } from './vaquinha.controller';
import { VaquinhaService } from './vaquinha.service';

describe('VaquinhaController', () => {
  let controller: VaquinhaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VaquinhaController],
      providers: [VaquinhaService],
    }).compile();

    controller = module.get<VaquinhaController>(VaquinhaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
