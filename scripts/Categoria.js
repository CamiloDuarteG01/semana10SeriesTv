export class Categoria {
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
    set agregarSerie(serie) {
        this.series.push(serie);
    }
}
//# sourceMappingURL=Categoria.js.map