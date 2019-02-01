import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonaIndexComponent } from './tipo-persona-index.component';

describe('TipoPersonaIndexComponent', () => {
  let component: TipoPersonaIndexComponent;
  let fixture: ComponentFixture<TipoPersonaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPersonaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPersonaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
