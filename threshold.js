let img;
const umbral = 90;

function preload() {
  img1 = loadImage('assets/derrumbe');
}

function setup() {
  createCanvas(img1.width, img1.height);
  //let d = pixelDensity();
  // let halfImage = 4 * (img.width) * (img.height / 2);
  img.loadPixels();
  
  // console.log("size ", img.pixels[5000]);
  for (let i = 0; i < img.pixels.length; i += 4 ) {
    // img.pixels[i] = img.pixels[i] % 2 == 0 ? 0 : 255;
    //img.pixels[i] = img.pixels[i] % 2 == 0 ? img.pixels[i] + 50 : img.pixels[i] - 50;
    //img.pixels[i +1 ] = img.pixels[i +1 ] % 2 == 0 ? img.pixels[i +1 ] + 150 : img.pixels[i +1 ] - 150;
    if (img.pixels[i] > umbral) {
      img.pixels[i + 3] = 10;
    }

    img2.pixels[i] = img.pixels[i] * 1.2;

    img.pixels[i] = img.pixels[i] * 0.99;
    img.pixels[i + 1] =  img.pixels[i+1] * 0.69;
    img.pixels[i + 2] =  img.pixels[i+1] * 0.3;
  }
  
  img.updatePixels();
  img2.updatePixels();

  
  image(img, 0, 0, width, height);
} 