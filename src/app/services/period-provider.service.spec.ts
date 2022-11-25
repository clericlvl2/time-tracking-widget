import { TestBed } from '@angular/core/testing';

import { PeriodProviderService } from './period-provider.service';

describe('PeriodProviderService', () => {
  let service: PeriodProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
