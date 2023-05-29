export class Plan{
    precio: number
    constructor(
        precio: number = 0
      ) {
        this.precio = precio;
      }

      get Precio(): number{
        return this.Precio
      }

      set Precio(Precio: number){
        this.Precio = this.Precio;
      }
}