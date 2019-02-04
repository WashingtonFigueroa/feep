import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSuministroCreateComponent } from './tipo-suministro-create.component';

describe('TipoSuministroCreateComponent', () => {
  let component: TipoSuministroCreateComponent;
  let fixture: ComponentFixture<TipoSuministroCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSuministroCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSuministroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
