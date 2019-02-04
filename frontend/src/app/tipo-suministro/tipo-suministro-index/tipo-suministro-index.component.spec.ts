import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSuministroIndexComponent } from './tipo-suministro-index.component';

describe('TipoSuministroIndexComponent', () => {
  let component: TipoSuministroIndexComponent;
  let fixture: ComponentFixture<TipoSuministroIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSuministroIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSuministroIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
