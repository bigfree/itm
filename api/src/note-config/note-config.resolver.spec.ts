import { Test, TestingModule } from '@nestjs/testing';
import { NoteConfigResolver } from './note-config.resolver';
import { NoteConfigService } from './note-config.service';

describe('NoteConfigResolver', () => {
  let resolver: NoteConfigResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteConfigResolver, NoteConfigService],
    }).compile();

    resolver = module.get<NoteConfigResolver>(NoteConfigResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
