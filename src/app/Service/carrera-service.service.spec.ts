import { TestBed } from '@angular/core/testing';

import { CarreraServiceService } from './carrera-service.service';

describe('CarreraServiceService', () => {
  let service: CarreraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarreraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
