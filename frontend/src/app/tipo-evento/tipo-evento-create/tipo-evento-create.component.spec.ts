import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoCreateComponent } from './tipo-evento-create.component';

describe('TipoEventoCreateComponent', () => {
  let component: TipoEventoCreateComponent;
  let fixture: ComponentFixture<TipoEventoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEventoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEventoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
