export class Persona {
    private nombre: string;
    private foto: string;
    private descripcion: string;
   
  

  
    constructor(
      nombre: string = '',
      foto: string = '',
      descripcion: string = ''  
    ) {
      this.nombre = nombre;
      this.foto = foto;
      this.descripcion = descripcion;
      
    }
   
    // Sobreescritura del constructor
  
  
    get Nombre(): string {
      return this.nombre;
    }
    get Foto(): string {
      return this.foto;
    }
    get Descripcion(): string {
      return this.descripcion;
    }
   
    
    set Nombre(e: string) {
      this.nombre = e;
    }
    set Foto(e: string) {
      this.foto= e;
    }
    set Descripcion(e: string) {
      this.descripcion = e;
    }


  }