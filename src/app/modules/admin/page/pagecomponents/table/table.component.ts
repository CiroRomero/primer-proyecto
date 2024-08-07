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

  async agreagarProducto(){
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

}
