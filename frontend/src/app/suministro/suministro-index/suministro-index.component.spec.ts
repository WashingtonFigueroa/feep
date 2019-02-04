import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroIndexComponent } from './suministro-index.component';

describe('SuministroIndexComponent', () => {
  let component: SuministroIndexComponent;
  let fixture: ComponentFixture<SuministroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuministroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuministroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
