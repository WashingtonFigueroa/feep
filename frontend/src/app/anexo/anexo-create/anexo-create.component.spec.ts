import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexoCreateComponent } from './anexo-create.component';

describe('AnexoCreateComponent', () => {
  let component: AnexoCreateComponent;
  let fixture: ComponentFixture<AnexoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnexoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
