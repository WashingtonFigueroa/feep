import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroCreateComponent } from './suministro-create.component';

describe('SuministroCreateComponent', () => {
  let component: SuministroCreateComponent;
  let fixture: ComponentFixture<SuministroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuministroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuministroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
