import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionIndexComponent } from './organizacion-index.component';

describe('OrganizacionIndexComponent', () => {
  let component: OrganizacionIndexComponent;
  let fixture: ComponentFixture<OrganizacionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
