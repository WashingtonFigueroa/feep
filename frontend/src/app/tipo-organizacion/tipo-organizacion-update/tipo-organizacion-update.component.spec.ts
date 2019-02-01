import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrganizacionUpdateComponent } from './tipo-organizacion-update.component';

describe('TipoOrganizacionUpdateComponent', () => {
  let component: TipoOrganizacionUpdateComponent;
  let fixture: ComponentFixture<TipoOrganizacionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrganizacionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrganizacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
