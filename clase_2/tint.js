let img; 

function preload() {
  img = loadImage("img/neptuno.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  tint(120, 100, 0);
  image(img, 0, 0, img.width, img.height);
}