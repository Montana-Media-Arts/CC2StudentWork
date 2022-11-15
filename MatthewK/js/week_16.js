var scal=0.4;
var speed=0.117;
var x=0;
var y=0;
var timerVal=30;
var boldFont;
var lightFont;
var lightItalicFont;
var grid1;
var grid2;
var grid3;
var grid4;
var grid5;
var freq;
var osc;
const particles = [];
var w1 = window.innerWidth;
var h1 = window.innerHeight; 
function preload() {
    boldFont = loadFont('./assets/fonts/Bold.ttf');
    lightFont = loadFont('./assets/fonts/Light.ttf');
    lightItalicFont = loadFont('./assets/fonts/LightItalic.ttf');
  }  
  function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
   // setBackground();
    
  }
function setup() {
  createCanvas(w1,h1);
  setInterval(timeStamp, 1000);
}

function draw() {
background(220);


var partSpeed=mouseX;

  //fill(125, 200, 80);
  //rect(25, 385, 55, 20);
  //triangle(10, 395, 40, 375, 40, 415);
  //fill(0,0,0);
  //textSize(12);
  //text('BACK', 45, 400);
  
  text('Matthew Knight', 660, 425);
  textSize(15);
  text('Music Generator 4000', 10, 20);
  textSize(12);

  grid1 = new mySynth(50, 130, "SINE WAVE", 'sine');
  grid1.makeSynth();

  grid2 = new mySynth(225, 130, "TRIANGLE WAVE", 'triangle');
  grid2.makeSynth();

  grid3 = new mySynth(400, 130, "SAWTOOTH WAVE", 'sawtooth');
  grid3.makeSynth();

  grid4 = new mySynth(575, 130, "SQUARE WAVE", 'square');
  grid4.makeSynth();
  
  x+=speed;

  //text('MouseX is '+ partSpeed, 400, 50);


  partSpeed++;

  } 




function timeStamp(){
  if (timerVal > 0) {
    timerVal--;
  }
  else{
    timerVal=30;
    x=0;
  }
}



function mousePressed(){
  grid1.mousePressy();
  grid2.mousePressy();
  grid3.mousePressy();
  grid4.mousePressy();
}

function mouseDragged(){
  grid1.mouseDraggy();
  grid2.mouseDraggy();
  grid3.mouseDraggy();
  grid4.mouseDraggy();
}

function mouseReleased(){
  grid1.mouseUnpressy();
  grid2.mouseUnpressy();
  grid3.mouseUnpressy();
  grid4.mouseUnpressy();
}