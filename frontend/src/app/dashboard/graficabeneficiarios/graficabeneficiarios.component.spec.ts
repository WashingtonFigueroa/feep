import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficabeneficiariosComponent } from './graficabeneficiarios.component';

describe('GraficabeneficiariosComponent', () => {
  let component: GraficabeneficiariosComponent;
  let fixture: ComponentFixture<GraficabeneficiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficabeneficiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficabeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
