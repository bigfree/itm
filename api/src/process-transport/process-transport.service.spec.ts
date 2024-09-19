import { Test, TestingModule } from '@nestjs/testing';
import { ProcessTransportService } from './process-transport.service';

describe('ProcessTransportService', () => {
  let service: ProcessTransportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcessTransportService],
    }).compile();

    service = module.get<ProcessTransportService>(ProcessTransportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
