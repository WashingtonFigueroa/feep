import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPersonaUpdateComponent } from './tipo-persona-update.component';

describe('TipoPersonaUpdateComponent', () => {
  let component: TipoPersonaUpdateComponent;
  let fixture: ComponentFixture<TipoPersonaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPersonaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPersonaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
