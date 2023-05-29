"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const Persona_js_1 = require("./Persona.js");
class Actor extends Persona_js_1.Persona {
    constructor(nombre, foto, descripcion) {
        super(nombre, foto, descripcion);
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
exports.Actor = Actor;
//# sourceMappingURL=Actor.js.map