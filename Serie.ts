import { Director } from "./Director.js";
import { Actor } from "./Actor.js";
import { Categoria } from "./Categoria.js";
import { Episodio } from "./Episodio.js";
import { Plataforma } from "./Plataforma.js";

export class Serie {
  private nombre: string;
  private imagen: string;
  private listActores: Actor[];
  private listDirectores: Director[];
  private conjuntoCategorias: Categoria[];
  private episodios: Episodio[];
  private plataformas: Plataforma[];

  constructor(nombre: string = '', imagen: string = '') {
    this.nombre = nombre;
    this.imagen = imagen;
    this.listActores = [];
    this.listDirectores = [];
    this.conjuntoCategorias = [];
    this.episodios = [];
    this.plataformas = [];
  }
  
  
  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  get Imagen(): string {
    return this.imagen;
  }

  set Imagen(nuevaImagen: string) {
    this.imagen = nuevaImagen;
  }

  get ListActores(): Actor[] {
    return this.listActores;
  }

  set agregarActor(actor: Actor) {
    this.listActores.push(actor);
  }

  get ListDirectores(): Director[] {
    return this.listDirectores;
  }

  set agregarDirector(director: Director) {
    this.listDirectores.push(director);
  }

  get ConjuntoCategorias(): Categoria[] {
    return this.conjuntoCategorias;
  }

   set agregarCategoria(categoria: Categoria){
    this.conjuntoCategorias.push(categoria);
  }

  get Episodios(): Episodio[] {
    return this.episodios;
  }

  set Episodio(ep: Episodio){
  
    this.episodios.push(ep);
  }

  get Plataformas(): Plataforma[] {
    return this.plataformas;
  }

  set agregarPlataforma(plataforma: Plataforma) {
    this.plataformas.push(plataforma);
  }
}
