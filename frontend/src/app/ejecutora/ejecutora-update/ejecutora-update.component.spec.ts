import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutoraUpdateComponent } from './ejecutora-update.component';

describe('EjecutoraUpdateComponent', () => {
  let component: EjecutoraUpdateComponent;
  let fixture: ComponentFixture<EjecutoraUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutoraUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutoraUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
