import { TestBed } from '@angular/core/testing';

import { SuvenApiService } from './suven-api.service';

describe('SuvenApiService', () => {
  let service: SuvenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuvenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
