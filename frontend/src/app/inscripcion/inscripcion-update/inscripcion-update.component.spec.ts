import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionUpdateComponent } from './inscripcion-update.component';

describe('InscripcionUpdateComponent', () => {
  let component: InscripcionUpdateComponent;
  let fixture: ComponentFixture<InscripcionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
