import { Serie } from "./Serie.js";

export class Categoria {
  private nombre: string;
  private series: Serie[];

  constructor(nombre: string = '') {
    this.nombre = nombre;
    this.series = [];
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  get Series(): Serie[] {
    return this.series;
  }

  set agregarSerie(serie: Serie){
    this.series.push(serie);
  }
}

  
 