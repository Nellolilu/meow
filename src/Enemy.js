class Enemy {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.height = 40;
    this.width = 40;
    this.col = "yellow";
  }

  draw() {
    fill(this.col);
    image(diamond, this.x, this.y, this.width, this.height);
  }


  moveToCenter() {
    if (this.y > 300) {
      this.y -= 15;
    }
    if (this.x < 200) {
      this.x +=10
    }
    if (this.y < 300) {
      this.y += 15
    }
    if (this.x > 200) {
      this.x -=10
    }
  }


}
