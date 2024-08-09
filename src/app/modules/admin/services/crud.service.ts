import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
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
   obtenerProducto(){
    // snapshotChanges => toma una captura del estado de los datos
    // pipe => fuinciona como una tuberia que retorna el nuevo arreglo de datos
    // map => "mapea" o recorre esta nueva informacion
    // a => reguarda la nueva informacion y la envia
    return this.productoCollection.snapshotChanges().pipe(map(action => action.map (a => a.payload.doc.data())));
   }


   //EDITAR producto
   modificarProducto(idProducto: string, nuevaData:Producto){
    //accedemos a la coleccion, buscamos por ID y actualizamos informacion
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
   }

   eliminarProducto(idProducto: string){
    return new Promise((resolve, reject) => {
      try{
        // accedo a la colección, busco su ID y lo elimino
        const respuesta = this.productoCollection.doc(idProducto).delete();
        resolve(respuesta);
      }
      catch(error){
        reject(error);
      }
    })
  }
}

