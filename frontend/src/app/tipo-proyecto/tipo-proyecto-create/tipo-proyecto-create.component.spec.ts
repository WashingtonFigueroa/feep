import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProyectoCreateComponent } from './tipo-proyecto-create.component';

describe('TipoProyectoCreateComponent', () => {
  let component: TipoProyectoCreateComponent;
  let fixture: ComponentFixture<TipoProyectoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoProyectoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProyectoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
