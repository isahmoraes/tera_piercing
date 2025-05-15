import { TestBed } from '@angular/core/testing';

import { PiercingService } from './piercing.service';

describe('PiercingService', () => {
  let service: PiercingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiercingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
