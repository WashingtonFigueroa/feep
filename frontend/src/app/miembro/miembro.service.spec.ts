import { TestBed, inject } from '@angular/core/testing';

import { MiembroService } from './miembro.service';

describe('MiembroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiembroService]
    });
  });

  it('should be created', inject([MiembroService], (service: MiembroService) => {
    expect(service).toBeTruthy();
  }));
});
