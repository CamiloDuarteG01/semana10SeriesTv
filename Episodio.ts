import { Serie } from "./Serie.js";

export class Episodio {
  private nombre: string;
  private resumen: string;
  private duracion: number;
  private serie: Serie[];

  constructor(
    nombre: string = '',
    resumen: string = '',
    duracion: number = 0
  ) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
    this.serie = [];
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(valor: string) {
    this.nombre = valor;
  }

  get Resumen(): string {
    return this.resumen;
  }

  set Resumen(valor: string) {
    this.resumen = valor;
  }

  get Duracion(): number {
    return this.duracion;
  }

  set Duracion(valor: number) {
    this.duracion = valor;
  }

  get Serie(): Serie[] {
    return this.serie;
  }

  agregarSerie(serie: Serie): void {
    this.serie.push(serie);
  }
}
