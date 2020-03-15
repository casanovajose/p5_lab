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

// lista de caracteres y de palabras que queremos excluir
const excluirCaracteres = [];
const excluirPalabras = [];

// objeto que asocia la palabra con su cantidad de apariciones
let cantidadPalabras = {};

/**
 * configuración inicial de nuestro programa
 */
function setup () {
  // creamos un "Canvas" donde poder dibujar la nube de palabras
  createCanvas(window.innerWidth - 10, window.innerHeight- 10);

  // para cada pregunta: limpiamos, filtramos y contamos las palabras
  for (let i = 0; i < preguntas.length; i++) {
    // quitamos los caracteres que no precisamos
    let pregunta = limpiarCaracteres(preguntas[i], excluirCaracteres);
    // separamos la pregunta en palabras
    let palabrasSeparadas = pregunta.split(" ");
    // quitamos las plabras que no necesitamos
    let p = limpiarPalabras(palabrasSeparadas, excluirPalabras);
    // agregamos al contador de palabras
    agregarPalabras(p);
  }

  for (let clave in cantidadPalabras) {
    let p = cantidadPalabras[clave];
    fill(random(0, 200), 100);
    textSize(p.cantidad * 15);
    text(p.palabra, random(50, window.innerWidth - 50), random(50, window.innerHeight - 50));
  }
}

/** 
  String pregunta
  @param {Array} arrayPregunta contiene la pregunta separada en palabras
*/
function agregarPalabras(arrayPregunta) {
  for (let index = 0; index < arrayPregunta.length; index++) {
    let p = arrayPregunta[index];

    if (cantidadPalabras[p]) {
      cantidadPalabras[p].cantidad += 1;
    } else {
      cantidadPalabras[p] = {palabra: p, cantidad: 1}
    }
  }
}

/**
 * Elimina caracteres excluidos
 * @param {String} pregunta
 * @param {Array} caracteres - caracteres a ser excluidos
 * @returns {String} devuelve un String limpio
 */
function limpiarCaracteres(pregunta, caracteres) {
  let p = pregunta;
  for (let i = 0; i < caracteres.length; i++) {
    p = p.replace(caracteres[i], "");
  }
  // evitamos incluir los espacios en blanco
  return p.trim();
}

/**
 *  Elimina las palabras excluidas
 * 
 * @param {Array} arrayPregunta - pregunta separada en palabras
 * @param {Array} palabras - palabras a ser excluidas
 * @returns {Array} array sin las palabras excluidas
 */
function limpiarPalabras(arrayPregunta, palabras) {
  let arrayLimpio = [];
  for (let i = 0; i < arrayPregunta.length; i++) {
    if (!palabras.includes(arrayPregunta[i])) {
      arrayLimpio.push(arrayPregunta[i]);
    }
  }

  return arrayLimpio;
}

//----------------------------------
//----------------------------------

function imprimirPalabrasPorCantidad() {
  const values = Object.values(cantidadPalabras);
  console.log(values.sort((a, b) => {return b.cantidad - a.cantidad}));
}

function imprimirMayoresQue(c = 2) {
  const values = Object.values(cantidadPalabras);
  console.log(values.filter((p) => {return p.cantidad >= c}));
}