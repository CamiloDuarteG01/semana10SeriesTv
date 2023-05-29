"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plataforma = void 0;
const Plan_js_1 = require("./Plan.js");
class Plataforma {
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
    agregarPlan(precio) {
        const plan = new Plan_js_1.Plan(precio);
        this.planes.push(plan);
    }
}
exports.Plataforma = Plataforma;
//# sourceMappingURL=Plataforma.js.map