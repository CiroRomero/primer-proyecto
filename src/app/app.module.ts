import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicio de rutas que otorga angular
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';
//Vinculaciones / Importaciones de Firebase
import { environments } from 'src/environments/environments';

import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireStorageModule} from '@angular/fire/compat/storage'; 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        //Componentes Globales
    SharedModule,
    AngularFireModule.initializeApp(environments.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
