import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionEventoIndexComponent } from './asignacion-evento-index.component';

describe('AsignacionEventoIndexComponent', () => {
  let component: AsignacionEventoIndexComponent;
  let fixture: ComponentFixture<AsignacionEventoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionEventoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionEventoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
