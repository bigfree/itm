import { Test, TestingModule } from '@nestjs/testing';
import { TransportsResolver } from './transports.resolver';
import { TransportsService } from './transports.service';

describe('TransportsResolver', () => {
  let resolver: TransportsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportsResolver, TransportsService],
    }).compile();

    resolver = module.get<TransportsResolver>(TransportsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
