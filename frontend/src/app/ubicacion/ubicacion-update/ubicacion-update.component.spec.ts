import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionUpdateComponent } from './ubicacion-update.component';

describe('UbicacionUpdateComponent', () => {
  let component: UbicacionUpdateComponent;
  let fixture: ComponentFixture<UbicacionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
