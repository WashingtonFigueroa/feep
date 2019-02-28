import { TestBed, inject } from '@angular/core/testing';

import { TipoProyectoService } from './tipo-proyecto.service';

describe('TipoProyectoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoProyectoService]
    });
  });

  it('should be created', inject([TipoProyectoService], (service: TipoProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
