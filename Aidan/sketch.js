var x = 0;
var y = 0;
var timerValue = 60;
var myImages = [];
var i = [];
var imagesToDisplay = [];
var imageClassObject;
var wallTop;
var wallBottom;
var MAX_SPEED = 10;
var score1Value = 0;
var score2Value = 0;
var points = 1;
let img;
let img2;
let myFont;
let monteObject;
function preload() {
  names = loadStrings("./assets/Spin.txt");
  img = loadImage('assets/ice.png');
  myImages[0] = img
  img2 = loadImage('assets/monte.png');
  myFont = loadFont('assets/Rowdies-Regular.ttf');
  
}

function setup()
{
    createCanvas(1920, 1080);
    setInterval(timeIt, 1000);
    textFont(myFont);
    textSize(36);
    text('p5*js', 10, 50);
    wallTop = createSprite(width/2, -30/2, width, 30);
    wallTop.immovable = true;
    wallBottom = createSprite(width/2, height+30/2, width, 30);
    wallBottom.immovable = true;
    monteObject= createSprite(970,590,);
    monteObject.addImage(img2);
    monteObject.maxSpeed = MAX_SPEED;
    monteObject.velocity.y = 0;
    monteObject.velocity.x = 0;
    Player_1 = createSprite(105,368,100);
    Player_1.immovable = true;
    Player_1.shapeColor = color(220,20,60);
    Player_2 = createSprite(1500,500,100);
    Player_2.immovable = true;
    Player_2.shapeColor = color(128,128,128);

    monteObject.setSpeed(MAX_SPEED, -180);
    
}
function draw()
{
    background(220);
    image(myImages[0], 0, 0,);
    drawSprites();
    if(touches.length > 0)
    {
      Player_1.position.x = touches[0].x;
      Player_1.position.y = touches[0].y;

    }

    if(touches.length > 1){
      Player_2.position.x = touches[1].x;
      Player_2.position.y = touches[1].y;
    }
  
  var swing;
  if(monteObject.bounce(Player_1)) {
    swing = (monteObject.position.y-Player_1.position.y)/3;
    monteObject.setSpeed(MAX_SPEED, monteObject.getDirection()+swing);
  }
  if(monteObject.bounce(Player_2)) {
    swing = (monteObject.position.y-Player_2.position.y)/3;
    monteObject.setSpeed(MAX_SPEED, monteObject.getDirection()+swing);
  }

  monteObject.bounce(wallTop);
  monteObject.bounce(wallBottom);

  if(monteObject.position.x<0) {
    monteObject.position.x = width/2;
    monteObject.position.y = height/2;
    monteObject.setSpeed(MAX_SPEED, 0);
    score1Value++;

  }

  if(monteObject.position.x>width) {
    monteObject.position.x = width/2;
    monteObject.position.y = height/2;
    monteObject.setSpeed(MAX_SPEED, 180);
    score2Value++;
  }
    textSize(42);
    text("Griz Pong", 880, 34);
    text("By: Aidan Sweet", 1500, 1000);
    text("Back", 60, 1000);
    text(score1Value,650,50);
    text(score2Value,1250,50);

   if (timerValue >= 30) {
    text(timerValue, 955,  70);
  }
  if (timerValue < 30) {
    text(timerValue, 955, 70);
  }
  if (timerValue == 0) {
    text('Game Over',  880, 100);
    MAX_SPEED = 0;
  }
}
  
 
function mouseMoved()
{
    x = mouseX;
    y = mouseY;
}

    function timeIt() {
      if (timerValue > 0) {
        timerValue--;
      }
      
    }

   
  
    

