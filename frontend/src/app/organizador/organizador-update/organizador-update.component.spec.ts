import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorUpdateComponent } from './organizador-update.component';

describe('OrganizadorUpdateComponent', () => {
  let component: OrganizadorUpdateComponent;
  let fixture: ComponentFixture<OrganizadorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizadorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
