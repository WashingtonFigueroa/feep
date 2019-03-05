import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexoUpdateComponent } from './anexo-update.component';

describe('AnexoUpdateComponent', () => {
  let component: AnexoUpdateComponent;
  let fixture: ComponentFixture<AnexoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnexoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
