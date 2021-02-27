class Enemy {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.height = 40;
    this.width = 40;
    this.position = true;
  }

  draw() {
    image(pig, this.x, this.y, this.width, this.height);
  }

  moveToCenter() {
    this.changePosition();
    if (this.y > 300) {
      this.y -= 15;
    }
    if (this.x < 200) {
      this.x += 10;
    }
    if (this.y < 300) {
      this.y += 15;
    }
    if (this.x > 200) {
      this.x -= 10;
    }
  }

  changePosition() {
    if (frameCount % 15 == 0) {
      console.log("change");
      this.position = !this.position;
      if (this.position) {
        this.y += 30;
        this.x += 10;
      } else {
        this.y -= 50;
        this.x -= 10;
      }
    }
  }
}
