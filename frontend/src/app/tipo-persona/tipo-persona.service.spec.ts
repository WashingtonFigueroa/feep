import { TestBed, inject } from '@angular/core/testing';

import { TipoPersonaService } from './tipo-persona.service';

describe('TipoPersonaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoPersonaService]
    });
  });

  it('should be created', inject([TipoPersonaService], (service: TipoPersonaService) => {
    expect(service).toBeTruthy();
  }));
});
