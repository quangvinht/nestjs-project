import { Test, TestingModule } from '@nestjs/testing';
import { AdviceLetterController } from './advice-letter.controller';

describe('AdviceLetterController', () => {
  let controller: AdviceLetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdviceLetterController],
    }).compile();

    controller = module.get<AdviceLetterController>(AdviceLetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
