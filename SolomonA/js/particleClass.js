// Daniel Shiffman
// http://codingtra.in

// Simple Particle System
// https://youtu.be/UcdigVaIYAk

class Particle {

    constructor() {
      this.x = random(0, 1900);
      this.y = -100;
      this.vx = random(-10, 10);
      this.vy = random(-10, -1);
      this.alpha = 255;
      var path = "./assets/imgs/meteors/boulder_10.png"; 
      this.img = loadImage(path); 
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x -= this.vx;
      this.y -= this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(255, this.alpha);
      // ellipse(this.x, this.y, 16);
      image(this.img, this.x, this.y); 
    }
  
  }
  