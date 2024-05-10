import { Component } from '@angular/core';
//importo la interfaz de ciudad
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //propiedad publica tipo array
  public info: Ciudad[];

  constructor(){
    this.info = [
      {
        id: "",
        img: "https://media.lmcipolletti.com/p/77595e27ac7dc0ffadc88b3f4fe20bb1/adjuntos/198/imagenes/005/426/0005426711/1200x675/smart/cipolletti-un-drone.jpg",
        nombre: "Cipolletti",
        codigoPostal: 8324,
        poblacion: 87.343,
        ubicacion: " Cipolletti, Río Negro, Argentina",
        atl: "Cipolletti es una ciudad ubicada en la provincia de Río Negro, Argentina. Es conocida por ser un importante centro comercial, industrial y de servicios en la región. Se encuentra en el valle del río Negro, cerca de la confluencia con el río Neuquén. La ciudad ha experimentado un crecimiento significativo en las últimas décadas, con un desarrollo económico impulsado por la agricultura, la ganadería, la industria frutícola y la producción de petróleo y gas. Cipolletti también ofrece una variedad de atracciones culturales y recreativas, incluyendo parques, plazas, museos y eventos culturales. Su ubicación estratégica en el Alto Valle del Río Negro la convierte en un importante centro urbano en la región patagónica de Argentina.",
      },
      {
        id: "",
        img: "https://lh6.googleusercontent.com/proxy/VSk4VdPQNHZdIrTKRaIETez7JO06R7HXLdqszEwOC3642r7gybT5a6FAtuOhL4H4Jee9LrX8nisZAf0jE9GZ1eD6sX9yx5MSx28AutTvw8tiZe_JFOvNxlYxXw1cTyM",
        nombre: "Neuquen",
        codigoPostal: 8300,
        poblacion:  231.780,
        ubicacion: " Neuquén Capital, Neuquén, Argentina",
        atl: "Neuquén es la capital de la provincia del mismo nombre en Argentina. Ubicada en la región de la Patagonia, la ciudad es un importante centro económico, político y cultural en la región. Se encuentra en el valle del río Neuquén, rodeada de paisajes naturales impresionantes y cercana a importantes yacimientos de petróleo y gas, lo que la convierte en un centro neurálgico de la industria energética en el país. La ciudad ofrece una amplia gama de servicios, incluyendo comercios, restaurantes, instituciones educativas y de salud, así como una variedad de opciones de entretenimiento y cultura, como teatros, museos y eventos culturales. Neuquén es también un punto de partida para explorar la belleza natural de la Patagonia, con fácil acceso a parques nacionales, lagos y montañas.",
      },
      {
        id: "",
        img: "https://www.generalroca.gov.ar/wp-content/uploads/2023/07/monumento-manzana-1-432x270.jpg",
        nombre: "General Roca",
        codigoPostal: 8332,
        poblacion: 330.502,
        ubicacion: " General Roca, Río Negro, Argentina",
        atl: "General Roca, en la provincia de Río Negro, Argentina, es conocida como la Capital Nacional de la Manzana debido a su destacada producción frutícola. Fundada en 1879 y nombrada en honor al general Julio Argentino Roca, la ciudad combina una economía diversificada con eventos culturales y festivales, como la Fiesta Nacional de la Manzana. Con sus encantos agrícolas y su rica historia, General Roca atrae a residentes y turistas por igual.",
      },
    ]
  }

}
