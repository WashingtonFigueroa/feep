import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenIndexComponent } from './resumen-index.component';

describe('ResumenIndexComponent', () => {
  let component: ResumenIndexComponent;
  let fixture: ComponentFixture<ResumenIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
