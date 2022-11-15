let L = 30;
let snake = [];
let n = 3;
let pause = true;
let t = 0;
let dir;
let gameover = false;
let ate = false;
var w1 = window.innerWidth;
var h1 = window.innerHeight;
let button;
function windowResized() {
  resizeCanvas(window.innerWidth,window.innerHeight);
 // setBackground();
  
}
function setup() 
{
  createCanvas(w1,h1);
  background('green');
  for (let i = 0; i < n; i++)
    {
        snake.push(new Segment(i, 300 - L * i, 300));
        snake[i].show();
    }
  dir = createVector(1, 0);
  apple = new Fruit();
  apple.show();
  createDPad();

}

function draw() 
{
    textSize(20);
    fill(0);
    noStroke();
   // text("Click to Start", 10, 20)
   // text("Use arrow keys to move", 10,40)
  if (!pause) 
  {
    if (gameover) 
    {
      textSize(50);
      text("GAME OVER", w1/2-200,h1/2);
    } 
    else 
    {
      background('green');
      if (ate) 
      {
        apple = new Fruit();
        ate = false;
      }
      apple.show();
      checkkey();
      t = t + 1;
      if (t % 10 == 0) 
      {
        for (let i = n - 1; i > 0; i--) 
        { // Follow head trail
          snake[i].update(snake[i - 1].x, snake[i - 1].y);
        }
        snake[0].move(L * dir.x, L * dir.y); // Change directions
      }
      for (let i = 0; i < n; i++) 
      {
        snake[i].show();
      }
      checkSeg();
      checkAte();
      checkWalls();
        //checkWall();
     createDPad();
    }
  }
}

function createDPad()
{
    fill(0);
    square(75,25,50);
    fill(255);
    textSize(18);
    text("up",89,55);

    fill(0);
    square(75,125,50);
    fill(255);
    textSize(18);
    text("down",77,155);

    fill(0);
    square(25,75,50);
    fill(255);
    textSize(18);
    text("left",35,105);

    fill(0);
    square(125,75,50);
    fill(255);
    textSize(18);
    text("right",135,105);
}
function checkkey() 
{

  // down
  if (mouseY >= 125 && mouseY <= 175 && mouseX >= 75 && mouseX <= 125) 
  {
    dir = createVector(0, 1);
  }
  // up
  if (mouseY >= 25 && mouseY <= 75 && mouseX >= 75 && mouseX <= 125) 
  {
    dir = createVector(0, -1);
  }
  
  //left
  if (mouseY >= 75 && mouseY <=125 && mouseX >= 25 && mouseX <= 75) 
  {
    dir = createVector(-1, 0);
  }
  // right
  if (mouseY >= 75 && mouseY <= 125 && mouseX >= 125 && mouseX <= 175) 
  {
    dir = createVector(1, 0);
  }
}

function checkSeg() 
{
  for (let i = 1; i < n; i++) 
  {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) 
    {
      // Eat yourself - Game Over
      gameover = true;
    }
  }
}

function checkWalls()
{
    if (snake[0].x >= width)
    {
        gameover = true;
    }
    if (snake[0].y >= height)
    {
        gameover = true;
    }
    if (snake[0].x <= length)
    {
        gameover = true;
    }
    if (snake[0].y <= length)
    {
        gameover = true;
    }
}
function checkAte() 
{
  if (!ate && snake[0].x == apple.x && snake[0].y == apple.y) 
  {
    snake.push(new Segment(n, snake[n-1].x, snake[n-1].y));
    // snake[n].show();
    n += 1;
    ate = true;
  }
}


class Segment 
{
  constructor(i, x, y) 
  {
    this.i = i;
    this.x = x;
    this.y = y;
  }
  update(x, y) 
  {
    this.x = x;
    this.y = y;
  }
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
  show() 
  {
    stroke('green');
    strokeWeight(2);
    if (this.i == 0) 
    {
      fill('black');
    } else 
    {
      fill('blue');
    }
    square(this.x, this.y, L);
  }
}

class Fruit 
{
  constructor() 
  {
    this.x = round(random(0, (width - L) / L)) * L;
    this.y = round(random(0, (height - L) / L)) * L;
  }
  show() 
  {
    strokeWeight(2);
    stroke(100, 0, 0);
    fill('red');
    circle(this.x + L / 2, this.y + L / 2, L * 0.7);
  }
}

function mousePressed() 
{
  if (pause) 
  {
    pause = false;
  } 
  else 
  {
    pause = true;
  }
}