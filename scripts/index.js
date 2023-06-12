import { Episodio } from "./Episodio.js";
import { Serie } from "./Serie.js";
import { Categoria } from "./Categoria.js";
import { Director } from "./Director.js";
import { Actor } from "./Actor.js";
// Creando lista de series
let listaSeries = [];
const epA = new Episodio('Episodio 1', 'Inicio de la serie A1', '1:20', 'SerieA1');
const epA1 = new Episodio('Episodio 2', 'Inicio de la serie A2', '1:20', 'SerieA2');
const epA2 = new Episodio('Episodio 3', 'Inicio de la serie A3', '1:20', 'SerieA3');
const epA3 = new Episodio('Episodio 4', 'Inicio de la serie A4', '1:20', 'SerieA4');
const epA4 = new Episodio('Episodio 5', 'Inicio de la serie A5', '1:20', 'SerieA5');
//crear series
let serie1 = new Serie('SerieA', 'Dos patos');
let serie2 = new Serie('SerieB', 'Un perro');
let serie3 = new Serie('SerieC', 'Tres gatos');
let serie4 = new Serie('SerieD', 'Dos patos segunda parte');
let serie5 = new Serie('SerieE', 'La puerta');
//insertar series
listaSeries.push(serie1);
listaSeries.push(serie2);
listaSeries.push(serie3);
listaSeries.push(serie4);
listaSeries.push(serie5);
//ingresando episodios
serie1.Episodios.push(epA);
serie1.Episodios.push(epA1);
serie1.Episodios.push(epA2);
serie1.Episodios.push(epA3);
serie1.Episodios.push(epA4);
//1.Mostrar lista de series
console.log(listaSeries);
//2.mostra el detalle de una serie en particular
console.log(serie1.Episodios);
console.log(serie2.Episodios);
//3.Mostrar el listado de las categorias.
//agregar Categorias
let listCategorias = [];
let categoria = new Categoria('Thriller e intriga');
let categoria1 = new Categoria('Ciencia ficción');
let categoria2 = new Categoria('Dramas políticos');
let categoria3 = new Categoria('Comedia');
let categoria4 = new Categoria('Terror');
let categoria5 = new Categoria('Animación');
//insertando lista de categorias 
listCategorias.push(categoria);
listCategorias.push(categoria1);
listCategorias.push(categoria2);
listCategorias.push(categoria3);
listCategorias.push(categoria4);
listCategorias.push(categoria5);
//mostrar listado categorias.
console.log(listCategorias);
//unir categoria con serie
categoria.Series.push(serie1);
categoria1.Series.push(serie2);
categoria2.Series.push(serie3);
categoria3.Series.push(serie4);
categoria4.Series.push(serie5);
//unir serie con categoria
serie1.ConjuntoCategorias.push(categoria);
serie2.ConjuntoCategorias.push(categoria1);
serie3.ConjuntoCategorias.push(categoria2);
serie4.ConjuntoCategorias.push(categoria3);
serie5.ConjuntoCategorias.push(categoria4);
//4.mostrar el listado de directores y actores de una serie
//Aplicar herencia
let listPersonas = [];
let director1 = new Director('Pedro Gomez', 'Foto Pedro', 'Director');
let director2 = new Director('Juan Gonzalez', 'Foto Juan', 'Director');
let actor1 = new Actor('Nubia', 'Foto Nubia', 'Actor');
let actor2 = new Actor('Luis', 'Foto Luis', 'Actor');
listPersonas.push(director1);
listPersonas.push(director2);
listPersonas.push(actor1);
listPersonas.push(actor2);
console.log(listPersonas);
//agregando director a la serie
serie1.ListDirectores.push(director1);
serie2.ListDirectores.push(director2);
//agregando Actores
serie1.ListActores.push(actor1, actor2);
serie2.ListActores.push(actor2);
//4.mostrar el listado de directores y actores de una serie
console.log(`La serie ${serie1.Nombre} `);
console.log(`Directores de la serie: ${serie1.ListDirectores.map(director => director.Nombre).join(", ")}`);
console.log(`Actores de la serie: ${serie1.ListActores.map(actor => actor.Nombre).join(", ")}`);
console.log(`La serie ${serie2.Nombre} `);
console.log(`Directores de la serie: ${serie2.ListDirectores.map(director => director.Nombre).join(", ")}`);
console.log(`Actores de la serie: ${serie2.ListActores.map(actor => actor.Nombre).join(", ")}`);
//# sourceMappingURL=index.js.map