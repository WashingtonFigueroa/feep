import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoContainerComponent } from './insumo-container.component';

describe('InsumoContainerComponent', () => {
  let component: InsumoContainerComponent;
  let fixture: ComponentFixture<InsumoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
