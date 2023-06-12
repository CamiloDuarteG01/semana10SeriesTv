

export class Episodio {
  private nombre: string;
  private resumen: string;
  private duracion: string;
  private serie: string | undefined;

  constructor(
    nombre: string = '',
    resumen: string = '',
    duracion: string = '',
    nombreSerie ?:string 
  ) {
    this.nombre = nombre;
    this.resumen = resumen;
    this.duracion = duracion;
    this.serie=nombreSerie;
  }
//falta verificar si la serie existe
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

  get Duracion(): string {
    return this.duracion;
  }

  set Duracion(valor: string) {
    this.duracion = valor;
  }
  get Serie(): string | undefined{
    return this.serie;
  }

  set Serie(valor: string | undefined) {
    this.serie = valor;
  }


}
