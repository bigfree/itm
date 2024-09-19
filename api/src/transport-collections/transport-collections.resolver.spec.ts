import { Test, TestingModule } from '@nestjs/testing';
import { TransportCollectionsResolver } from './transport-collections.resolver';
import { TransportCollectionsService } from './transport-collections.service';

describe('TransportCollectionsResolver', () => {
  let resolver: TransportCollectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportCollectionsResolver, TransportCollectionsService],
    }).compile();

    resolver = module.get<TransportCollectionsResolver>(TransportCollectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
