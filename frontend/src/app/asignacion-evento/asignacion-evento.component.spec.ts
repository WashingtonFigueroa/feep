import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEventoComponent } from './asignacion-evento.component';

describe('AsignacionEventoComponent', () => {
  let component: AsignacionEventoComponent;
  let fixture: ComponentFixture<AsignacionEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
