import { TestBed, inject } from '@angular/core/testing';

import { AnexoService } from './anexo.service';

describe('AnexoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnexoService]
    });
  });

  it('should be created', inject([AnexoService], (service: AnexoService) => {
    expect(service).toBeTruthy();
  }));
});
