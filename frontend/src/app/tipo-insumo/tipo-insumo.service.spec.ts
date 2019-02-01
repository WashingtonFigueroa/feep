import { TestBed, inject } from '@angular/core/testing';

import { TipoInsumoService } from './tipo-insumo.service';

describe('TipoInsumoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoInsumoService]
    });
  });

  it('should be created', inject([TipoInsumoService], (service: TipoInsumoService) => {
    expect(service).toBeTruthy();
  }));
});
