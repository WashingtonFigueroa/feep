import { TestBed, inject } from '@angular/core/testing';

import { AsignacionEventoService } from './asignacion-evento.service';

describe('AsignacionEventoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignacionEventoService]
    });
  });

  it('should be created', inject([AsignacionEventoService], (service: AsignacionEventoService) => {
    expect(service).toBeTruthy();
  }));
});
