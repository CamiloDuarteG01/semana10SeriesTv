"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Episodio = void 0;
class Episodio {
    constructor(nombre = '', resumen = '', duracion = 0) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = [];
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(valor) {
        this.nombre = valor;
    }
    get Resumen() {
        return this.resumen;
    }
    set Resumen(valor) {
        this.resumen = valor;
    }
    get Duracion() {
        return this.duracion;
    }
    set Duracion(valor) {
        this.duracion = valor;
    }
    get Serie() {
        return this.serie;
    }
    agregarSerie(serie) {
        this.serie.push(serie);
    }
}
exports.Episodio = Episodio;
//# sourceMappingURL=Episodio.js.map