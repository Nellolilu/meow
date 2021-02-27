class Player {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.width = 40;
    this.height = 40;
    this.jumpCount = 0;
    this.velocity = 0;
    this.floor = YBORDER;
    this.image = true;
  }

  draw() {
    image(kitty, this.x, this.y, this.width, this.height);
    if (frameCount % 15 == 0) {
      this.image = !this.image;
      if (this.image) {
        hinten1 = hinten2;
        vorne1 = vorne2;
        rechts1 = rechts2;
        links1 = links2;
      } else {
        hinten1 = hinten1f;
        vorne1 = vorne1f;
        rechts1 = rechts1f;
        links1 = links1f;
      }
    }
  }

  drawLevel3Skills() {
    this.velocity += GRAVITY;
    this.y += this.velocity;
    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
      this.jumpCount = 0;
    }
  }

  // // MOVE AROUND

  // JUMPS
  keyPressed() {
    if (keyCode === 32) {
      this.jump();
      if (!game.loose && !game.won) game.score += 1;
    }
  }

  jump() {
    if (this.jumpCount === 3) {
      return;
    }
    this.jumpCount++;
    this.y -= 10;
    this.velocity -= 5;
  }

  // WALKS
  moveUp(steps) {
    kitty = hinten1;
    this.y -= HEIGHT / steps;
    if (this.y < 0) {
      this.y = 0;
    }
  }

  moveLeft(steps) {
    kitty = rechts1;
    this.x -= WIDTH / steps;
    if (this.x < 0) {
      this.x = 0;
    }
  }

  moveDown(steps) {
    kitty = vorne1;
    this.y += HEIGHT / steps;
    if (this.y + this.height > HEIGHT) {
      this.y = HEIGHT - this.height;
    }
  }

  moveRight(steps) {
    kitty = links1;
    this.x += WIDTH / steps;
    if (this.x + this.width > WIDTH) {
      this.x = WIDTH - this.width;
    }
  }
}
