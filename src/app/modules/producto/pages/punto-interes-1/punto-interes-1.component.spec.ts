import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoInteres1Component } from './punto-interes-1.component';

describe('PuntoInteres1Component', () => {
  let component: PuntoInteres1Component;
  let fixture: ComponentFixture<PuntoInteres1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoInteres1Component]
    });
    fixture = TestBed.createComponent(PuntoInteres1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
