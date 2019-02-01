import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrganizacionCreateComponent } from './tipo-organizacion-create.component';

describe('TipoOrganizacionCreateComponent', () => {
  let component: TipoOrganizacionCreateComponent;
  let fixture: ComponentFixture<TipoOrganizacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrganizacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrganizacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
