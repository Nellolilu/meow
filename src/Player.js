class Player {
    constructor(startingX, startingY) {
        this.height = 40
        this.width =  40
        // this.x = WIDTH / 2.25
        // this.y = YBORDER
        this.x = startingX;
        this.y = startingY;
        this.jumpCount = 0
        this.velocity = -5   
        // check to make a first up then down;
      this.floor = YBORDER
      this.steps = 300
    }

   draw() {
    fill("white");   
    rect(this.x, this.y, this.width, this.height);
   } 


   drawLevel3Skills () {
    this.velocity += GRAVITY;
    this.y += this.velocity;
    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
   }

   keyPressed() {
    if (keyCode === 32) {
      this.jump();
    }
  }

  jump() {
    if (this.jumpCount === 3) {
      return
    }
    this.jumpCount ++;
    this.y -= 10;
    this.velocity -=5
  }

  //  moveUp(steps) {
  //   this.y -= HEIGHT / steps;
  //   if (this.y < 0) {
  //     this.y = 0;
  //   }
  // }

  // moveLeft(steps) {
  //   this.x -= WIDTH / steps;
  //   if (this.x < 0) {
  //     this.x = 0;
  //   }
  // }

  // moveDown(steps) {
  //   this.y += HEIGHT / steps;
  //   if (this.y + this.height > HEIGHT) {
  //     this.y = HEIGHT - this.height;
  //   }
  // }

  // moveRight(steps) {
  //   this.x += WIDTH / steps;
  //   if (this.x + this.width > WIDTH) {
  //     this.x = WIDTH - this.width;
  //   }
  // }

  
  moveUp() {
    this.y -= HEIGHT / this.steps;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveLeft() {
    this.x -= WIDTH / this.steps;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveDown() {
    this.y += HEIGHT / this.steps;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  moveRight() {
    this.x += WIDTH / this.steps;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }


  
}