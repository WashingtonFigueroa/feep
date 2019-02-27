import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoCreateComponent } from './proyecto-create.component';

describe('ProyectoCreateComponent', () => {
  let component: ProyectoCreateComponent;
  let fixture: ComponentFixture<ProyectoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
