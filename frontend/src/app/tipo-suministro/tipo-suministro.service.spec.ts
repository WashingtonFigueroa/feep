import { TestBed, inject } from '@angular/core/testing';

import { TipoSuministroService } from './tipo-suministro.service';

describe('TipoSuministroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoSuministroService]
    });
  });

  it('should be created', inject([TipoSuministroService], (service: TipoSuministroService) => {
    expect(service).toBeTruthy();
  }));
});
