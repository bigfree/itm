import { Test, TestingModule } from '@nestjs/testing';
import { ProcessTransportController } from './process-transport.controller';

describe('ProcessTransportController', () => {
  let controller: ProcessTransportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcessTransportController],
    }).compile();

    controller = module.get<ProcessTransportController>(ProcessTransportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
