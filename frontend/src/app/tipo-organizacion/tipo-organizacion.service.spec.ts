import { TestBed, inject } from '@angular/core/testing';

import { TipoOrganizacionService } from './tipo-organizacion.service';

describe('TipoOrganizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoOrganizacionService]
    });
  });

  it('should be created', inject([TipoOrganizacionService], (service: TipoOrganizacionService) => {
    expect(service).toBeTruthy();
  }));
});
