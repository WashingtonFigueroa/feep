import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoOrganizacionIndexComponent } from './tipo-organizacion-index.component';

describe('TipoOrganizacionIndexComponent', () => {
  let component: TipoOrganizacionIndexComponent;
  let fixture: ComponentFixture<TipoOrganizacionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOrganizacionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOrganizacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
