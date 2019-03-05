import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEventoCreateComponent } from './asignacion-evento-create.component';

describe('AsignacionEventoCreateComponent', () => {
  let component: AsignacionEventoCreateComponent;
  let fixture: ComponentFixture<AsignacionEventoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionEventoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEventoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
