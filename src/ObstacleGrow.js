class ObstacleGrow {
  constructor() {
    this.x = random(0, WIDTH - 25);
    this.y = 0;
    this.width = 45;
    this.height = 45;
  }

  draw() {
    this.y += 0.5;
    image(rat, this.x, this.y, this.width, this.height);
  }
}
