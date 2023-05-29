"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(nombre = '') {
        this.nombre = nombre;
        this.series = [];
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get Series() {
        return this.series;
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=Categoria.js.map