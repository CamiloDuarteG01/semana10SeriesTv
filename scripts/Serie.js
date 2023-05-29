"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
const Episodio_js_1 = require("./Episodio.js");
class Serie {
    constructor(nombre = '', imagen = '') {
        this.nombre = nombre;
        this.imagen = imagen;
        this.listActores = [];
        this.listDirectores = [];
        this.conjuntoCategorias = [];
        this.episodios = [];
        this.plataformas = [];
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get Imagen() {
        return this.imagen;
    }
    set Imagen(nuevaImagen) {
        this.imagen = nuevaImagen;
    }
    get ListActores() {
        return this.listActores;
    }
    agregarActor(actor) {
        this.listActores.push(actor);
    }
    get ListDirectores() {
        return this.listDirectores;
    }
    agregarDirector(director) {
        this.listDirectores.push(director);
    }
    get ConjuntoCategorias() {
        return this.conjuntoCategorias;
    }
    agregarCategoria(categoria) {
        this.conjuntoCategorias.push(categoria);
    }
    get Episodios() {
        return this.episodios;
    }
    agregarEpisodio(nombre, resumen, duracion) {
        const episodio = new Episodio_js_1.Episodio(nombre, resumen, duracion);
        this.episodios.push(episodio);
    }
    get Plataformas() {
        return this.plataformas;
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
}
exports.Serie = Serie;
//# sourceMappingURL=Serie.js.map