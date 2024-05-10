import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoInteres2Component } from './punto-interes-2.component';

describe('PuntoInteres2Component', () => {
  let component: PuntoInteres2Component;
  let fixture: ComponentFixture<PuntoInteres2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuntoInteres2Component]
    });
    fixture = TestBed.createComponent(PuntoInteres2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
