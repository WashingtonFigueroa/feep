import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonaCreateComponent } from './tipo-persona-create.component';

describe('TipoPersonaCreateComponent', () => {
  let component: TipoPersonaCreateComponent;
  let fixture: ComponentFixture<TipoPersonaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPersonaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPersonaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
