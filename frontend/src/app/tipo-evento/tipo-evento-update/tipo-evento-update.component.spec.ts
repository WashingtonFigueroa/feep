import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoUpdateComponent } from './tipo-evento-update.component';

describe('TipoEventoUpdateComponent', () => {
  let component: TipoEventoUpdateComponent;
  let fixture: ComponentFixture<TipoEventoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEventoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEventoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
