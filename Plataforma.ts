import { Serie } from "./Serie.js";
import { Plan } from "./Plan.js";

export class Plataforma {
  private nombre: string;
  private sitio_web: string;
  private planes: Plan[];
  private series: Serie[];
 

  constructor(nombre: string, sitio_web: string) {
    this.nombre = nombre;
    this.sitio_web = sitio_web;
    this.planes = [];
    this.series = [];
 
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  get Sitio_web(): string {
    return this.sitio_web;
  }

  set Sitio_web(nuevoSitio_web: string) {
    this.sitio_web = nuevoSitio_web;
  }

  agregarPlan(...plan: Plan[]): void {
    this.planes.push(...plan);
  }

  agregarSerie(...series: Serie[]): void {
    this.series.push(...series);
  }
 

  get Planes(): Plan[] {
    return this.planes;
  }

  get Series(): Serie[] {
    return this.series;
  }
}


