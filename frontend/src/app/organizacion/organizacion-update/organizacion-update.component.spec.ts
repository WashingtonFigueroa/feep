import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionUpdateComponent } from './organizacion-update.component';

describe('OrganizacionUpdateComponent', () => {
  let component: OrganizacionUpdateComponent;
  let fixture: ComponentFixture<OrganizacionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
