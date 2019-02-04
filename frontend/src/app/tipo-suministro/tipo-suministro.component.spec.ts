import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSuministroComponent } from './tipo-suministro.component';

describe('TipoSuministroComponent', () => {
  let component: TipoSuministroComponent;
  let fixture: ComponentFixture<TipoSuministroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSuministroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSuministroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
