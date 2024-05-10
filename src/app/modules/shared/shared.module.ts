import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//componenetes locales del navbar
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    //lea

    MatToolbarModule, MatButtonModule, MatIconModule
  ]
})
export class SharedModule { }
