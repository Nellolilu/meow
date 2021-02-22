class Enemy {
  constructor(startingX, startingY) {
    this.x = startingX;
    this.y = startingY;
    this.height = 30;
    this.width = 30
    this.col = "orange"



}

  draw() {
    fill(this.col);
    rect(this.x, this.y, this.width, this.height);
  }

  moveToCenter () {
    if (this.x < 200 && this.y < 500) {
      this.x += 100;
      this.y += 100

    }
  
  }

  // setRandomposition() {
  //   this.x = 
  // }

}
