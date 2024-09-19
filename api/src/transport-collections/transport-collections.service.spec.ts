import { Test, TestingModule } from '@nestjs/testing';
import { TransportCollectionsService } from './transport-collections.service';

describe('TransportCollectionsService', () => {
  let service: TransportCollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportCollectionsService],
    }).compile();

    service = module.get<TransportCollectionsService>(TransportCollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
