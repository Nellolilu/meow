class Enemy {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.height = 20;
    this.width = 20;
    this.col = "yellow";
  }

  draw() {
    fill(this.col);
    rect(this.x, this.y, this.width, this.height);
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


  // setRandomposition() {
  //   this.x =
  // }
}
