import { TestBed, inject } from '@angular/core/testing';

import { SuministroService } from './suministro.service';

describe('SuministroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuministroService]
    });
  });

  it('should be created', inject([SuministroService], (service: SuministroService) => {
    expect(service).toBeTruthy();
  }));
});
