class ObstacleMany {
  constructor() {
    this.x = random(0, WIDTH - 35);
    this.y = 0;
    this.width = 50;
    this.height = 20;
  }

  draw() {
    this.y += 0.7;
    image(fish, this.x, this.y, this.width, this.height);
  }
}
