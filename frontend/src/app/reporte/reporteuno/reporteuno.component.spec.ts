import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteunoComponent } from './reporteuno.component';

describe('ReporteunoComponent', () => {
  let component: ReporteunoComponent;
  let fixture: ComponentFixture<ReporteunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
