import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto'
import { CrudService } from '../../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //crear coleccion de productos del tipo producto => lo definimos como un array
  coleccionProductos: Producto[] = [];

   // Variable para manejar el estado de Edición y Eliminación de productos
  modalVisibleProducto: boolean = false;
  

  // Variable va a tomar el producto que nosotros elijamos
  productoSeleccionado!: Producto; // <- recibe valores vacíos
  //definimos formulario para los productos
  /*
  Atributos alfanumericos (string) se inicializan con comillas simples
  Atributos numericos (number) se unicializan con cer ( 0 )
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),

})
  precio: any;

  constructor(public serviciocrud: CrudService){}

  ngOnInit(): void{
    // subscribe => notifica constantemente los cambios del sistema
    this.serviciocrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto(){
    //validamos los valores del producto agregado
    if(this.producto.valid){
      let nuevoProducto: Producto ={
        //idProducto no se toma porque es generado por la BD y no el usuario
        idProducto: '',
        //el resto es tomado con la informacion ingresada por el usuario
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
        
      }

      await this.serviciocrud.CrearProducto(nuevoProducto)
      .then(producto => {
        alert("Ha agregado un nuevo producto con exito :) ");
      })
      .catch(error => {
        alert("Hubo un problema al agregar un nuevo producto")
      })
    }
  }

 // Función para alertar al usuario del producto que desea eliminar
 mostrarBorrar(productoSeleccionado: Producto){
  // abre el modal
  this.modalVisibleProducto = true;

  // toma los valores del producto elegido
  this.productoSeleccionado = productoSeleccionado;
}

// Función para eliminar definitivamente al producto
borrarProducto(){
  this.serviciocrud.eliminarProducto(this.productoSeleccionado.idProducto)
  .then(respuesta => {
    alert("El producto se ha eliminado correctamente.")
  })
  .catch(error => {
    alert("No se ha podido eliminar el producto"+error);
  })
}


//Funcion para seleccionar el producto a editar
mostrarEditar(productoSeleccionado: Producto){
  this.productoSeleccionado = productoSeleccionado;

  //Enviar o "setear" los nuevos valores y resignarlos a las variables
  ///el ID no se vuelve a enviar ni se modifica, por ende no lo llamamos
  this.producto.setValue({
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    descripcion: productoSeleccionado.descripcion,
    categoria: productoSeleccionado.categoria,
    imagen: productoSeleccionado.imagen,
    alt: productoSeleccionado.alt,
  })

}

editarProducto(){
  let datos: Producto = {
    //Solo el ID toma y deja igual su valor
    idProducto: this.productoSeleccionado.idProducto,
    nombre: this.producto.value.nombre!,
    precio: this.producto.value.precio!,
    descripcion: this.producto.value.descripcion!,
    categoria: this.producto.value.categoria!,
    imagen: this.producto.value.imagen!,
    alt: this.producto.value.alt!,
  }

  this.serviciocrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
  .then(this.producto => {
    alert('El producto fue modificado con éxito');
  })
  .catch(error =>{
    alert('Hubo un problema al modificar el producto');
  })
}

}


