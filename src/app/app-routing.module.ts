import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


const routes: Routes = [

  //es una ruta comun que te lleva a un componente
  {path:"",component:InicioComponent},
  //carga perezosa = ruta que te lleva a un modulo especifico
  //loadChildren inidica que habra una ruta fija
  //()=>import funcion flecha que importa desde la ruta 
  //.then funcion asincronica del tipo PROMESA
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
