import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoInteres3Component } from './punto-interes-3.component';

describe('PuntoInteres3Component', () => {
  let component: PuntoInteres3Component;
  let fixture: ComponentFixture<PuntoInteres3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoInteres3Component]
    });
    fixture = TestBed.createComponent(PuntoInteres3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
