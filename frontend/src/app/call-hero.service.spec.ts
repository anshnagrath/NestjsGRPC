import { TestBed } from '@angular/core/testing';

import { CallHeroService } from './call-hero.service';

describe('CallHeroService', () => {
  let service: CallHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
