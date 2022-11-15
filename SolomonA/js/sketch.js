let bg; 

var character; 
var characterX = 100; 
var characterY = 500; 

// Falling meteors array
var fallingSprites; 

var sprite_sheet_idle; 
var idle_animation; 

var sprite_sheet_run; 
var run_animation; 
var run_animationX = 750; 

var timerTime = 0; 
var spawnTime = .25; 
var lifeTimer = 0; 

let gameOver = false; 
var w1 = window.innerWidth;
var h1 = window.innerHeight;
function preload()
{ 
    // Loading character animations so we can call them later. 
    sprite_sheet_idle = loadSpriteSheet('./assets/imgs/character/characterIdle.png', 32, 32, 3); 
    idle_animation = loadAnimation(sprite_sheet_idle); 
    sprite_sheet_run = loadSpriteSheet('./assets/imgs/character/characterRun.png', 32, 32, 4); 
    run_animation = loadAnimation(sprite_sheet_run); 
    singleMeteor = loadAnimation('./assets/imgs/meteors/boulder_10.png'); 
}
function windowResized() {
    resizeCanvas(window.innerWidth,window.innerHeight);
    w1 = window.innerWidth;
    h1 = window.innerHeight;
   // setBackground();
    
  }
function setup()
{
    createCanvas(w1,h1);
    bg = loadImage('./assets/imgs/volcano.jpg'); 
    characterY = h1-100;
    // Create the character sprite and add animations to it. 
    character = createSprite(characterX, characterY); 
    character.addAnimation('idle', idle_animation); 
    character.addAnimation('run', run_animation);  

    fallingSprites = new Group(); 

     // Add 5 meteors to the boxes group with the falling animation. 
     for(var z = 0; z < 1; z++)
     {
         var newMeteor = createSprite(random(100, 1000), 30);  
         newMeteor.addAnimation('falling', singleMeteor); 
         newMeteor.addToGroup(fallingSprites); 
     }

    setInterval(timer, 1000); 
    setInterval(spawnCircle, 1000); 
    setInterval(lifeTimer, 1000); 
    // setInterval(drawCircle, 1000); 
}

function draw()
{    
    background(bg); 

    if(gameOver)
    {
        fill(255, 255, 255); 
        textSize(50); 
        text('GAME OVER', w1/2-200, h1/2); 
        // lifeTimer = int(millis() / 1000); -- converts it to seconds but keeps the timer running for some reason. 
        text('Time survived: ' + lifeTimer + ' milliseconds', w1/2-300, h1/2+100); 
    }

    if(gameOver == false)
    {
        lifeTimer++; 
        fill(255, 0, 0); 
        textSize(50); 
        text('AVOID THE METEORS', w1/2-200, 75); 
    }

    // Renders the sprites, and also adds player movement/collision. 
    drawSprites(); 
    playerMovement(); 

    // character.scale(2); -- breaks the game for some reason. 

    if(fallingSprites.collide(character))
    {
        // fallingSprites[i].remove();
        character.remove(); 
        fallingSprites.removeSprites();  
        gameOver = true; 
    } 

    // Make the falling sprites fall
    for (var i = 0; i < fallingSprites.length; i++)
    {   
        fallingSprites[i].addSpeed(random(.1, .3), random(45, 90));  
        
        // console.log("length: " + fallingSprites.length); 
        // Meteors should be destroyed here, but can't quite figure it out. Need a class for this to work to check the y value. 
        /*
        if(fallingSprites[i] > 1080)
        {
            fallingSprites.remove(i, 1); 
        } 
        */
    }  
}

function timer() 
{
    if (timerTime < 5)
    {
        timerTime++; 
    }
    else if (timerTime >= 5)
    {
        // Changes color every 5 seconds. 
        timerTime = 0; 
    }
}

// Spawns the meteors
function spawnCircle()
{
    if (spawnTime > 0)
    {
        spawnTime--; 
    }
    else if (spawnTime <= 0)
    {
        // Spawning sprites 
        var newMeteor = createSprite(random(100, 1000), 30); 
        newMeteor.addAnimation('falling', singleMeteor); 
        newMeteor.addToGroup(fallingSprites); 
        spawnTime = .25; 
    }
}

// Player movement using p5.play functions. 
function playerMovement()
{
    //
    //if(keyDown('d'))
    if(mouseX >= w1/2 && mouseX < w1)
    {
        character.changeAnimation('run'); 
        character.setSpeed(3, 0); 
        character.mirrorX(1); 
    }
    else if(mouseX <= w1/2 && mouseX > 0)
    {
        character.changeAnimation('run'); 
        character.setSpeed(-3, 0); 
        character.mirrorX(-1); 
    }
    else 
    {
        character.changeAnimation('idle'); 
        character.setSpeed(0, 0);
    }
}

// Checks for player collision against meteors gruop. 
function playerCollision()
{
    character.collide(fallingSprites); 
}

