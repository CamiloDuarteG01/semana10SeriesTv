export class Episodio {
    constructor(nombre = '', resumen = '', duracion = '', nombreSerie) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
        this.serie = nombreSerie;
    }
    //falta verificar si la serie existe
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
    set Serie(valor) {
        this.serie = valor;
    }
}
//# sourceMappingURL=Episodio.js.map