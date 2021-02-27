class Exit {
  constructor() {
    this.x = WIDTH - 2;
    this.y = 60;
    this.width = 2;
    this.height = 20;
  }

  draw() {
    fill("yellow");
    rect(this.x, this.y, this.width, this.height);
  }
}
