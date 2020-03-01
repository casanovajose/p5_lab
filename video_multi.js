let stage = 1;
let videos = [];
let whichVideo = 0;
 
function preload(){
    videos[0] = createVideo("assets/vid/k1.mp4");
    videos[1] = createVideo("assets/vid/k8.mp4");
    videos[2] = createVideo("assets/vid/k11.mp4");
}
 
function setup() { 
  createCanvas(windowWidth, windowHeight);  //if much more videos change this to for loop to load&&hide
  videos[0].hide();
  videos[2].hide();
  videos[1].hide();
} 
 
function draw() { 
background(255,0,155);
  if (stage === 1){
    text("Stage 1",100,100);
  } else {
    image(videos[whichVideo],0,0,windowWidth,windowHeight);
    text("Video "+whichVideo,100,100);
  }
}
 
function playTheVideo() {
  videos[whichVideo].play();
  videos[whichVideo].onended(videoOver); //when video ends, call videoOver to return to first screen
}
 
function videoOver() {
  console.log("stopping video now"); 
  videos[whichVideo].pause();
  //videos[whichVideo].rewind();
  videos[whichVideo].hide();
  stage = 1;
}
 
function keyPressed() {
  if (stage === 1) {
    if (keyCode === LEFT_ARROW) {
      //accepted
      //pick random video from array
      whichVideo = (whichVideo+1)%videos.length;//floor(random(videos.length));         
      stage = 2;
      playTheVideo();
    }
  }
}