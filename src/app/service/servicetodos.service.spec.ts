import { TestBed } from '@angular/core/testing';

import { ServicetodosService } from './servicetodos.service';

describe('ServicetodosService', () => {
  let service: ServicetodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
