import { Test, TestingModule } from '@nestjs/testing';
import { VaquinhasService } from './vaquinhas.service';

describe('VaquinhasService', () => {
  let service: VaquinhasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VaquinhasService],
    }).compile();

    service = module.get<VaquinhasService>(VaquinhasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
