export class Persona {
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
        return this.foto;
    }
    get Descripcion() {
        return this.descripcion;
    }
    set Nombre(e) {
        this.nombre = e;
    }
    set Foto(e) {
        this.foto = e;
    }
    set Descripcion(e) {
        this.descripcion = e;
    }
}
//# sourceMappingURL=Persona.js.map