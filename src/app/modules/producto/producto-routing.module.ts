import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { PuntoInteres1Component } from './pages/punto-interes-1/punto-interes-1.component';
import { PuntoInteres2Component } from './pages/punto-interes-2/punto-interes-2.component';
import { PuntoInteres3Component } from './pages/punto-interes-3/punto-interes-3.component';

const routes: Routes = [
  {
    path:"general",component:ProductoComponent
  },
  {
    path:"punto_interes_1",component:PuntoInteres1Component
  },
  {
    path:"punto_interes_2",component:PuntoInteres2Component
  },
  {
    path:"punto_interes_3",component:PuntoInteres3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
