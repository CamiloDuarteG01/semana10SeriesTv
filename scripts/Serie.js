export class Serie {
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
    set agregarActor(actor) {
        this.listActores.push(actor);
    }
    get ListDirectores() {
        return this.listDirectores;
    }
    set agregarDirector(director) {
        this.listDirectores.push(director);
    }
    get ConjuntoCategorias() {
        return this.conjuntoCategorias;
    }
    set agregarCategoria(categoria) {
        this.conjuntoCategorias.push(categoria);
    }
    get Episodios() {
        return this.episodios;
    }
    set Episodio(ep) {
        this.episodios.push(ep);
    }
    get Plataformas() {
        return this.plataformas;
    }
    set agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
}
//# sourceMappingURL=Serie.js.map