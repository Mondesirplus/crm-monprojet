import { TestBed } from '@angular/core/testing';

import { PrestatiosService } from './prestatios.service';

describe('PrestatiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrestatiosService = TestBed.get(PrestatiosService);
    expect(service).toBeTruthy();
  });
});
