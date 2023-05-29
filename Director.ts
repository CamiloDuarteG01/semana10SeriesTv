import { Persona } from "./Persona.js";
import { Serie } from "./Serie.js";

export class Director extends Persona {

  series: Serie[];

  constructor(nombre: string, foto: string, descripcion: string) {
    super(nombre, foto, descripcion);
    this.series = [];
  }

  agregarSerie(serie: Serie): void {
    this.series.push(serie);
  }
}
