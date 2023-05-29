"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre = '', foto = '', descripcion = '') {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
    }
    // Sobreescritura del constructor
    get Nombre() {
        return this.nombre;
    }
    get Foto() {
        return this.Foto;
    }
    get Descripcion() {
        return this.Descripcion;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set Foto(e) {
        this.Foto = e;
    }
    set Descripcion(e) {
        this.Descripcion = e;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map