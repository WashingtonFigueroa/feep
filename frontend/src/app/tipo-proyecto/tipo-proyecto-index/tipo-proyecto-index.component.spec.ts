import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProyectoIndexComponent } from './tipo-proyecto-index.component';

describe('TipoProyectoIndexComponent', () => {
  let component: TipoProyectoIndexComponent;
  let fixture: ComponentFixture<TipoProyectoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProyectoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProyectoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
