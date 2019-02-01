import { TestBed, inject } from '@angular/core/testing';

import { OrganizacionService } from './organizacion.service';

describe('OrganizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizacionService]
    });
  });

  it('should be created', inject([OrganizacionService], (service: OrganizacionService) => {
    expect(service).toBeTruthy();
  }));
});
