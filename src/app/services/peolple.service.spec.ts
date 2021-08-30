import { TestBed } from '@angular/core/testing';

import { PeolpleService } from './peolple.service';

describe('PeolpleService', () => {
  let service: PeolpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeolpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
