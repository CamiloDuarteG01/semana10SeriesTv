export class Plataforma {
    constructor(nombre, sitio_web) {
        this.nombre = nombre;
        this.sitio_web = sitio_web;
        this.planes = [];
        this.series = [];
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    get Sitio_web() {
        return this.sitio_web;
    }
    set Sitio_web(nuevoSitio_web) {
        this.sitio_web = nuevoSitio_web;
    }
    agregarPlan(...plan) {
        this.planes.push(...plan);
    }
    agregarSerie(...series) {
        this.series.push(...series);
    }
    get Planes() {
        return this.planes;
    }
    get Series() {
        return this.series;
    }
}
//# sourceMappingURL=Plataforma.js.map