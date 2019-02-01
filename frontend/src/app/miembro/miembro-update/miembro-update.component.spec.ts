import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroUpdateComponent } from './miembro-update.component';

describe('MiembroUpdateComponent', () => {
  let component: MiembroUpdateComponent;
  let fixture: ComponentFixture<MiembroUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
