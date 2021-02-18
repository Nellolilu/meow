class Player {
    constructor(startingX, startingY) {
        this.height = WIDTH / 12
        this.width = WIDTH / 12
        // this.x = WIDTH / 2.25
        // this.y = YBORDER
        this.x = startingX;
        this.y = startingY
    }

   draw() {
    fill("white");   
    rect(this.x, this.y, this.width, this.height);
   } 

   moveUp(steps) {
    this.y -= HEIGHT / steps;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveLeft(steps) {
    this.x -= WIDTH / steps;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveDown(steps) {
    this.y += HEIGHT / steps;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  moveRight(steps) {
    this.x += WIDTH / steps;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }


  
}