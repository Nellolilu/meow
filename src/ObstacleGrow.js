class ObstacleGrow {
    constructor() {
        this.x = random(0, WIDTH-10);
        this.y = 0;
        this.width = 45
        this.height = 45
        this.color = "red"
    }


    draw() {
        fill(this.color);
        this.y += 0.5;
        image(steak, this.x, this.y, this.width, this.height);
    }
}