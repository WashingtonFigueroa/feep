import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrganizacionComponent } from './tipo-organizacion.component';

describe('TipoOrganizacionComponent', () => {
  let component: TipoOrganizacionComponent;
  let fixture: ComponentFixture<TipoOrganizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrganizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrganizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
