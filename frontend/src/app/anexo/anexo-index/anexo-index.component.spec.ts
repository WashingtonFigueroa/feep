import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexoIndexComponent } from './anexo-index.component';

describe('AnexoIndexComponent', () => {
  let component: AnexoIndexComponent;
  let fixture: ComponentFixture<AnexoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnexoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
