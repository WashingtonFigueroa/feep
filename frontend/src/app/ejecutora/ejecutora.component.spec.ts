import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutoraComponent } from './ejecutora.component';

describe('EjecutoraComponent', () => {
  let component: EjecutoraComponent;
  let fixture: ComponentFixture<EjecutoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
