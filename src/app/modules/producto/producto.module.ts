import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { PuntoInteres1Component } from './pages/punto-interes-1/punto-interes-1.component';
import { PuntoInteres2Component } from './pages/punto-interes-2/punto-interes-2.component';
import { PuntoInteres3Component } from './pages/punto-interes-3/punto-interes-3.component';


@NgModule({
  declarations: [
    ProductoComponent,
    PuntoInteres1Component,
    PuntoInteres2Component,
    PuntoInteres3Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
