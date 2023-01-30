import { Test, TestingModule } from '@nestjs/testing';
import { FeServiceController } from './fe-service.controller';

describe('FeServiceController', () => {
  let controller: FeServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeServiceController],
    }).compile();

    controller = module.get<FeServiceController>(FeServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
