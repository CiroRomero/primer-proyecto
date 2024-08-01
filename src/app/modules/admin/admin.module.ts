import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//archivo de vista del modulo
import { AdminRoutingModule } from './admin-routing.module';

//componente de vista
import { AdminComponent } from './page/admin/admin.component';

//componente local
import { TableComponent } from './page/pagecomponents/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
