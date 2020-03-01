// for converting videos use the following command:
// ffmpeg -ss 30 -i input.wmv -c copy -t 10 output.wmv

let vid;
let n = Math.floor(Math.random() * 10) +1;

function setup() {
  //noCanvas();
  
  vid = createVideo(
    [`assets/vid/k${n}.mp4`],
    vidLoad
  );
  vid.hide();
  vid.size(600, 600);
  createCanvas(600, 600);
  background(0);
  // console.log(vid)
  vid.elt.addEventListener('ended', (e) => {
    console.log("ended");
    n = Math.floor(Math.random() * 10) +1;
    vid.src = [`assets/vid/k${n}.mp4`];
    vid.autoplay();
    vid.volume(0);
    // vid.hide();
  });

  
}

function draw() {
  //rect(23,23,400,400);
  image(vid, 0, 0, 100, 200);
}

// This function is called when the video loads
function vidLoad() {
  
  vid.src = [`assets/vid/k${n}.mp4`]
  vid.autoplay();
  vid.volume(0);
  // vid.hide();
}