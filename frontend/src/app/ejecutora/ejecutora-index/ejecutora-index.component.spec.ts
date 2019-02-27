import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutoraIndexComponent } from './ejecutora-index.component';

describe('EjecutoraIndexComponent', () => {
  let component: EjecutoraIndexComponent;
  let fixture: ComponentFixture<EjecutoraIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutoraIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutoraIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
