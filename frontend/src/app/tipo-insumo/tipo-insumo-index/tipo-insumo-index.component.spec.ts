import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInsumoIndexComponent } from './tipo-insumo-index.component';

describe('TipoInsumoIndexComponent', () => {
  let component: TipoInsumoIndexComponent;
  let fixture: ComponentFixture<TipoInsumoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInsumoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInsumoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
