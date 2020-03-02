let img;
const umbral = 90;

function preload() {
  img = loadImage('assets/patan_300.png');
}

function setup() {
  createCanvas(600,300);
  background(100);
  image(img, 0, 0, img.width, img.height);
}

function draw () {  
  fill(get(mouseX, mouseY));
  rect(width/2, 0, width, height);
  
  //image(get(mouseX, mouseY, 50, 50), width / 2, 0,  width / 2, height);
}