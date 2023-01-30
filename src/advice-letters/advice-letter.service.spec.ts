import { Test, TestingModule } from '@nestjs/testing';
import { AdviceLetterService } from './advice-letter.service';

describe('AdviceLetterService', () => {
  let service: AdviceLetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdviceLetterService],
    }).compile();

    service = module.get<AdviceLetterService>(AdviceLetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
