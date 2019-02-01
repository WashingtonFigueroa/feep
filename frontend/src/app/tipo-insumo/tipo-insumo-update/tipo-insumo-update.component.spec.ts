import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInsumoUpdateComponent } from './tipo-insumo-update.component';

describe('TipoInsumoUpdateComponent', () => {
  let component: TipoInsumoUpdateComponent;
  let fixture: ComponentFixture<TipoInsumoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInsumoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInsumoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
