import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSuministroUpdateComponent } from './tipo-suministro-update.component';

describe('TipoSuministroUpdateComponent', () => {
  let component: TipoSuministroUpdateComponent;
  let fixture: ComponentFixture<TipoSuministroUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSuministroUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSuministroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
