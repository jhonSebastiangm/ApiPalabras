import { TestBed } from '@angular/core/testing';

import { ApiPalabrasService } from './api-palabras.service';

describe('ApiPalabrasService', () => {
  let service: ApiPalabrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPalabrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
