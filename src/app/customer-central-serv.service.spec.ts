import { TestBed } from '@angular/core/testing';

import { CustomerCentralServService } from './customer-central-serv.service';

describe('CustomerCentralServService', () => {
  let service: CustomerCentralServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCentralServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
