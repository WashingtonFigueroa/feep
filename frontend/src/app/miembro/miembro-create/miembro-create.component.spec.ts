import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroCreateComponent } from './miembro-create.component';

describe('MiembroCreateComponent', () => {
  let component: MiembroCreateComponent;
  let fixture: ComponentFixture<MiembroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
