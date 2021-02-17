class ObstacleGrow {
    constructor() {
        this.x = random(0, XBORDER);
        this.y = 0;
        this.height = 20
        this.width = 20
    }


    draw() {
        fill("red");
        this.y += 0.5;
        // speed   
        rect(this.x, this.y, this.width, this.height);
    }
}