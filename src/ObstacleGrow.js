class ObstacleGrow {
    constructor() {
        this.x = random(0, WIDTH-10);
        this.y = 0;
        this.width = 20
        this.height = 20
    }


    draw() {
        fill("red");
        this.y += 0.5;
        rect(this.x, this.y, this.width, this.height);
    }
}