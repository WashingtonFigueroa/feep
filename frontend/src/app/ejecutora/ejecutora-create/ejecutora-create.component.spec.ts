import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutoraCreateComponent } from './ejecutora-create.component';

describe('EjecutoraCreateComponent', () => {
  let component: EjecutoraCreateComponent;
  let fixture: ComponentFixture<EjecutoraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutoraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutoraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
