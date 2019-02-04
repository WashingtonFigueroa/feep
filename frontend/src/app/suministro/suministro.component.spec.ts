import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroComponent } from './suministro.component';

describe('SuministroComponent', () => {
  let component: SuministroComponent;
  let fixture: ComponentFixture<SuministroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuministroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuministroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
