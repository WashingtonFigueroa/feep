import { TestBed, inject } from '@angular/core/testing';

import { EjecutoraService } from './ejecutora.service';

describe('EjecutoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjecutoraService]
    });
  });

  it('should be created', inject([EjecutoraService], (service: EjecutoraService) => {
    expect(service).toBeTruthy();
  }));
});
