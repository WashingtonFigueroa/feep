import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadUpdateComponent } from './actividad-update.component';

describe('ActividadUpdateComponent', () => {
  let component: ActividadUpdateComponent;
  let fixture: ComponentFixture<ActividadUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
