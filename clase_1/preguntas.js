/**
 * OBJETIVOS
 * 
 * 1. Tener una idea general del programa
 * 2. Agregar items en los Arrays "preguntas" y "excluir"
 * 3. Ver correctamente la visualización
 * 4. Probar cambios en la visualizacion usando la referencia de P5js sobre las funciones de texto
 * 5. Plantear (y si es posible programar) otros tipos de visualizaciones.
 */

const preguntas = [
  "es esto una pregunta a a a a a a ?",
  " a cuantas veces puedo decir la palabra pregunta en una pregunta ?",
  "a y si escribo una cosa que no tenga nada que ver con la pregunta anterior ?",
  "tiene a asentido analizar absolutamente todas las palabras ?",
  "no tengo idea de que estoy a escribiendo ?",
  "diez preguntas son a suficientes para usar de ejemplo ?",
  "que tan dificil puede a ser tener diez preguntas escritas ?",
  "sobre que tema tengo ganas a  de hacerme mas preguntas ?",
  "tiene sentido hacer a a a a esto ?",
  "servira para algo a a a a a a a a este ejercicio ?",
  "¿Escrivo una pregunta más?",
  "¿Escribo otra?",
  "¿Escriv0 mais uma pergunta?",
];

const excluir = ["?", "."];
let cantidadPalabras = [];

/**
 * configuración inicial de nuestro programa
 */
function setup () {
  createCanvas(window.innerWidth - 10, window.innerHeight- 10);

  for (let i = 0; i < preguntas.length; i++) {
    pregunta = limpiarCaracteres(preguntas[i]);
    agregarPalabras(pregunta);
  }

  for (let clave in cantidadPalabras) {
    let p = cantidadPalabras[clave];
    fill(random(0, 200), 100);
    textSize(p.cantidad * 25);
    text(p.palabra, random(50, window.innerWidth - 50), random(50, window.innerHeight - 50));
  }
}

/** 
  String pregunta
  Array  palabras Arreglo que lleva la cuenta de las palabras
*/
function agregarPalabras(pregunta) {
  palabrasSeparadas = pregunta.split(" ");

  for (let index = 0; index < palabrasSeparadas.length; index++) {
    let p = palabrasSeparadas[index];

    if (cantidadPalabras[p]) {
      cantidadPalabras[p].cantidad += 1;
    } else {
      cantidadPalabras[p] = {palabra: p, cantidad: 1}
    }
  }
}

/**
 * Elimina palabras excluidas
 */
function limpiarCaracteres(pregunta) {
  let p = pregunta;
  for (let i = 0; i < excluir.length; i++) {
    p = p.replace(excluir[i], "");
  }

  return p;
}

function limpiarPalabras() {

}