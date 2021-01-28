let sunspeed = 0.5;
let moonspeed = 0.5;
let cloud = [];
let cloudx = 50;
let cloudy = 50;
let cloudspeed = 3;
let deerspeed = 1;
let br = 59;
let bg = 179;
let bb = 240;
var a = 0;
const width = 400;
const height = 400;

function setup() {
  createCanvas(width, height);
  lake = new Lake();
  sun = new Sun();
  moon = new Moon();
  mountains = new Mountains();
  deer = new Deer();
  grass = new Grass();
  stars = new Stars();
  trees = new Trees();
  for (let i = 0; i < 30; i++) {
    cloud.push(new Cloud());
  }
}

function draw() {
  background(br, bg, bb);
  sun.move();
  sun.show();

  if (sunspeed == 0) {
    stars.show();
    moon.move();
    moon.show();
  }
  mountains.show();
  grass.show();
  trees.show();
  lake.show();
  deer.show();

  for (var x = 0; x <= width; x += 37) {
    fill(114, 92, 66);
    rect(x, 320, 5, 30);
    fill(7, 173, 98);
    ellipse(x + 2, 320, 20, 20);
  }

  for (let i = 0; i < cloud.length; i++) {
    cloud[i].move();
    cloud[i].show();
  }

  if (mouseIsPressed) {
    deer.move();
  }
}

class Sun {
  constructor() {
    this.x = 199;
    this.y = 50;
  }
  move() {
    this.y = this.y + sunspeed;
    br = br - 0.2
    bg = bg - 0.2
    bb = bb - 0.2

    if (this.y > width - 50) {
      sunspeed = 0;
    }
  }
  show() {
    fill(235, 213, 52);
    noStroke();
    ellipse(this.x, this.y, 70, 70);
  }
}

class Moon {
  constructor() {
    this.x = 199;
    this.y = -30;
  }
  move() {
    this.y = this.y + moonspeed;

    if (this.y > width - 300) {
      moonspeed = 0;
    }
  }
  show() {
    fill(128, 128, 128);
    ellipse(this.x, this.y, 70, 70);
    strokeWeight(0);
  }
}

class Cloud {
  constructor() {
    this.x = random(width);
    this.y = random(200);
    this.d = (30);
    this.h = (10);
  }

  move() {
    this.x = this.x + cloudspeed;
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.d, this.h);
  }
}

class Lake {
  constructor() {
    this.x = (200);
    this.y = (375);
    this.w = (100);
    this.h = (40);
  }
  show() {
    fill(61, 133, 191);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  }
}


class Grass {
  show() {
    fill(126, 200, 100);
    noStroke();
    rect(1, 344, 399, 55);
  }
}

class Stars {
  show() {

    a = a + 1

    for (var x = 0; x <= width; x += random(100)) {
      for (var y = 0; y <= width; y += random(100)) {
        if (a % 20 === 0) {
          fill(221, 255, 0);
          noStroke();
          ellipse(x, y, 2, 2);

        }
      }
    }
  }
}

class Deer {
  constructor() {
    this.x = 30;
    this.y = 370;
    this.w = 20;
    this.h = 10;
  }
  show() {
    fill(102, 72, 49);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
    rect(this.x + 6, this.y, 3, 10);
    rect(this.x - 7, this.y, 3, 10);
    ellipse(this.x + 8, this.y - 6, 8, 8);
  }
  move() {
    this.x = this.x + deerspeed

    if (this.x > 150) {
      deerspeed = 0;
    }
  }
}
class Trees {
  show() {
    for (var x = 0; x <= width; x += 37) {
      fill(114, 92, 66);
      noStroke();
      rect(x, 320, 5, 30);
      fill(7, 173, 98);
      ellipse(x + 2, 320, 20, 20);
    }
  }
}

class Mountains {

  show() {
    fill(175);
    noStroke();
    triangle(-200, 399, 299, 399, 100, 75);
    fill(150)
    triangle(100, 399, 600, 399, 300, 75);
    fill(125)
    triangle(-50, 344, 230, 344, 75, 180);
    fill(100);
    triangle(170, 344, 450, 344, 290, 200);
  }
}
