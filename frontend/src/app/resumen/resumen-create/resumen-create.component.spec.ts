import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenCreateComponent } from './resumen-create.component';

describe('ResumenCreateComponent', () => {
  let component: ResumenCreateComponent;
  let fixture: ComponentFixture<ResumenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
