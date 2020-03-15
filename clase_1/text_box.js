// constante para almacenar texto (mejor llamado String o "Cadena de caracteres")
// texto citado: Politics of the archive. Translations in film (Hito Steyerl)
const texto = "What is an archive? What is an original version of a film? What is the impact of digital technologies on translation? And what constituencies are created within the digital limbo of globalized media networks?";

function setup() {
  // creamos el "canvas"
  createCanvas(200, 200);

  // color de fondo del "canvas"
  background(200, 150, 200);
  
  // color de relleno del texto
  fill(255);

  // tamaño en pixeles de la fuente
  textSize(10);

  // el texto usando la constante "texto" declarada en la línea 1
  // la función text() usa los dos primeros valores para determinar la posición inicial del texto
  // los últimos dos números determinan el ancho en píxeles de la caja que contiene al texto
  text(texto, 10, 10, 100, 180);
}