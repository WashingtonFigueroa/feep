import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInsumoCreateComponent } from './tipo-insumo-create.component';

describe('TipoInsumoCreateComponent', () => {
  let component: TipoInsumoCreateComponent;
  let fixture: ComponentFixture<TipoInsumoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInsumoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInsumoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
