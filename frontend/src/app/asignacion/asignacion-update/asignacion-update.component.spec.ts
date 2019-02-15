import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionUpdateComponent } from './asignacion-update.component';

describe('AsignacionUpdateComponent', () => {
  let component: AsignacionUpdateComponent;
  let fixture: ComponentFixture<AsignacionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
