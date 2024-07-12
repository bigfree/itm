import { Test, TestingModule } from '@nestjs/testing';
import { NoteConfigService } from './note-config.service';

describe('NoteConfigService', () => {
  let service: NoteConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteConfigService],
    }).compile();

    service = module.get<NoteConfigService>(NoteConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
