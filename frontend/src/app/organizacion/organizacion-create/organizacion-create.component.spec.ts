import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionCreateComponent } from './organizacion-create.component';

describe('OrganizacionCreateComponent', () => {
  let component: OrganizacionCreateComponent;
  let fixture: ComponentFixture<OrganizacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
