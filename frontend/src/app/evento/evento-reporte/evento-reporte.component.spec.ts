import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoReporteComponent } from './evento-reporte.component';

describe('EventoReporteComponent', () => {
  let component: EventoReporteComponent;
  let fixture: ComponentFixture<EventoReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
