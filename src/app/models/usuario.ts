//para crear las interfaces tengo que usar el comando "ng g i <nombre-de-la-interfaz>"
//estos los llamo de el TS de donde los quiera utilizar
export interface Usuario {
    uid:string;          //modelo de datos "string, number, etc"
    nombre:string;
    apellido:string;
    email:string;
    rol: string;
    password:string;

}
