import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoIndexComponent } from './proyecto-index.component';

describe('ProyectoIndexComponent', () => {
  let component: ProyectoIndexComponent;
  let fixture: ComponentFixture<ProyectoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
