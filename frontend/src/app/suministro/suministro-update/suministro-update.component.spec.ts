import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuministroUpdateComponent } from './suministro-update.component';

describe('SuministroUpdateComponent', () => {
  let component: SuministroUpdateComponent;
  let fixture: ComponentFixture<SuministroUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuministroUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuministroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
