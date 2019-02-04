import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorIndexComponent } from './organizador-index.component';

describe('OrganizadorIndexComponent', () => {
  let component: OrganizadorIndexComponent;
  let fixture: ComponentFixture<OrganizadorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
