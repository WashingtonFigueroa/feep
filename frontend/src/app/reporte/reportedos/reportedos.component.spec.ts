import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedosComponent } from './reportedos.component';

describe('ReportedosComponent', () => {
  let component: ReportedosComponent;
  let fixture: ComponentFixture<ReportedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
