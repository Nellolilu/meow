class ObstacleMany {
    constructor() {
        this.x = random(0, WIDTH-10);
        this.y = 0;
        this.width = 30
        this.height = 30

    }


    draw() {
        fill("pink");
        this.y += 0.7;
        // speed   
        ellipse(this.x, this.y, this.width, this.height);
    }


}