class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = WIDTH;
    this.height = HEIGHT;
  }

  draw() {
    image(bgImage, this.x, this.y, this.width, this.height);
  }
}
