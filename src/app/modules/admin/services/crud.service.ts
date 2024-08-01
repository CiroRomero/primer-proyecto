import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
private productoCollection: AngularFirestoreCollection <Producto>
  constructor( private database: AngularFirestore ) {
    this.productoCollection = database.collection('producto');
   }

   //Crear producto
   CrearProducto(producto: Producto){
    return new Promise(async (resolve, rejet) => {
      try{
        //creamos numero identificativo para el producto en la base de datos
        const idProducto = this.database.createId();

        //asignamos ID creado al atributo id Producto de la interfaz "Producto"
        producto.idProducto = idProducto;

        const resultado = await this.productoCollection.doc(idProducto).set(producto);

        resolve(resultado);
      }catch(error){
        rejet(error);
      }
    })
   }
   //obtener productos
}
