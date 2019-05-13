import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportetresComponent } from './reportetres.component';

describe('ReportetresComponent', () => {
  let component: ReportetresComponent;
  let fixture: ComponentFixture<ReportetresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportetresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
