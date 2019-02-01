import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiembroIndexComponent } from './miembro-index.component';

describe('MiembroIndexComponent', () => {
  let component: MiembroIndexComponent;
  let fixture: ComponentFixture<MiembroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiembroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiembroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
