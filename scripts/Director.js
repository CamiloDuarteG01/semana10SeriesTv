"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
const Persona_js_1 = require("./Persona.js");
class Director extends Persona_js_1.Persona {
    constructor(nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
exports.Director = Director;
//# sourceMappingURL=Director.js.map