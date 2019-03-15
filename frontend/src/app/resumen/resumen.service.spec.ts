import { TestBed, inject } from '@angular/core/testing';

import { ResumenService } from './resumen.service';

describe('ResumenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumenService]
    });
  });

  it('should be created', inject([ResumenService], (service: ResumenService) => {
    expect(service).toBeTruthy();
  }));
});
