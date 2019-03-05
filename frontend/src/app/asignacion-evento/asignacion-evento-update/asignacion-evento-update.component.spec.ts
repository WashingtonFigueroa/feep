import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEventoUpdateComponent } from './asignacion-evento-update.component';

describe('AsignacionEventoUpdateComponent', () => {
  let component: AsignacionEventoUpdateComponent;
  let fixture: ComponentFixture<AsignacionEventoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionEventoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEventoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
