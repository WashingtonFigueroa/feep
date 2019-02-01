import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEventoIndexComponent } from './tipo-evento-index.component';

describe('TipoEventoIndexComponent', () => {
  let component: TipoEventoIndexComponent;
  let fixture: ComponentFixture<TipoEventoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEventoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEventoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
