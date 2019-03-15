import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenUpdateComponent } from './resumen-update.component';

describe('ResumenUpdateComponent', () => {
  let component: ResumenUpdateComponent;
  let fixture: ComponentFixture<ResumenUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
