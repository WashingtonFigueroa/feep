import { TestBed, inject } from '@angular/core/testing';

import { OrganizadorService } from './organizador.service';

describe('OrganizadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizadorService]
    });
  });

  it('should be created', inject([OrganizadorService], (service: OrganizadorService) => {
    expect(service).toBeTruthy();
  }));
});
