import { TestBed } from '@angular/core/testing';

import { GlobalRequestService } from './global-request.service';

describe('GlobalRequestService', () => {
  let service: GlobalRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
