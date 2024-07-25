import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/page/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
logueado = true; //variable booleana para el boton de registro e incio sesion
deslogueado = false; //variable booleana para el boton de cerrar sesion

 constructor(
  public servicioAuth: AuthService,
  public servicioRutas: Router
 ){}

 //cambia los valores de logueado y deslogueado para ocultar los primeros y mostrar lo ultimo
 iniciar(){
  this.logueado = false;
  this.deslogueado = true;
 }

 cerrarSesion(){
  this.deslogueado = false;
  //va a eliminar el "token" del usuario 
  //token: estado actual del usuario en el navegador para mantener ña sesion abierta
  this.servicioAuth.cerrarSesion();

  this.servicioRutas.navigate(['/']);//redirigimos a la raiz de la pagina
  this.logueado = true;  
 }
}
