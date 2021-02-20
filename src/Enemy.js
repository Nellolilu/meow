class Enemy {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.height = 30;
    this.width = 30
    this.col = "orange"



}

  draw() {
    fill(this.col);
    rect(this.x, this.y, this.width, this.height);
  }

  // setRandomposition() {
  //   this.x = 
  // }

}
