import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionIndexComponent } from './inscripcion-index.component';

describe('InscripcionIndexComponent', () => {
  let component: InscripcionIndexComponent;
  let fixture: ComponentFixture<InscripcionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
