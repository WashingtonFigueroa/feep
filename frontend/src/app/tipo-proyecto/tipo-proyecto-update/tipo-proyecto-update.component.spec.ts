import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProyectoUpdateComponent } from './tipo-proyecto-update.component';

describe('TipoProyectoUpdateComponent', () => {
  let component: TipoProyectoUpdateComponent;
  let fixture: ComponentFixture<TipoProyectoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProyectoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProyectoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
