// for converting videos use the following command:
// ffmpeg -ss 30 -i input.wmv -c copy -t 10 output.wmv

let vid;
let n = Math.floor(Math.random() * 10) +1;

function setup() {
  noCanvas();

  vid = createVideo(
    [`assets/vid/k${n}.mp4`],
    vidLoad
  );

  vid.size(600, 600);
  // console.log(vid)
  vid.elt.addEventListener('ended', (e) => {
    console.log("ended");
    n = Math.floor(Math.random() * 10) +1;
    vid.src = [`assets/vid/k${n}.mp4`];
    vid.autoplay();
    vid.volume(0);
  });
}

// This function is called when the video loads
function vidLoad() {
  
  vid.src = [`assets/vid/k${n}.mp4`]
  vid.autoplay();
  vid.volume(0);
}