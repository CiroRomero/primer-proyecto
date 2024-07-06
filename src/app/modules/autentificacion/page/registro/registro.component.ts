import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
 //agregar un nuevo componente llamado "usuario"

 //importamos la paqueteria de criptacion
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //Esto "hide" es para el input de contraseña
  hide = true;

  //Importacion del modulo/ interfaz
  usuarios: Usuario ={

  uid:'', //Atributos tipo any = recibe valores indefinidos
    nombre:'',
    apellido:'',
    email:'',
    rol:'',
    password:''
  
  }
  //Crear una coleccion que solo recibe obejetos del tipo usuario
  coleccionUsuarios: Usuario[]=[];

  //Funcion del registro
  registrar()  {
    const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password
    }
    //Enviamos los nuevos registros por medio del push a la colección
    this.coleccionUsuarios.push(credenciales);
    console.log(credenciales)
    console.log(this.coleccionUsuarios)
  } 
}
