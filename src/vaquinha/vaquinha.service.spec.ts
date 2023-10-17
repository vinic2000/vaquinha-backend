import { Test, TestingModule } from '@nestjs/testing';
import { VaquinhaService } from './vaquinha.service';

describe('VaquinhaService', () => {
  let service: VaquinhaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaquinhaService],
    }).compile();

    service = module.get<VaquinhaService>(VaquinhaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
