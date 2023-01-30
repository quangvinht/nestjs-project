import { Test, TestingModule } from '@nestjs/testing';
import { FeServiceService } from './fe-service.service';

describe('FeServiceService', () => {
  let service: FeServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeServiceService],
    }).compile();

    service = module.get<FeServiceService>(FeServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
