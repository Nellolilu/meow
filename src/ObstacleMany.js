class ObstacleMany {
    constructor() {
        this.x = random(0, WIDTH-10);
        this.y = 0;
        this.width = 50
        this.height = 20

    }


    draw() {
        fill("pink");
        this.y += 0.7;
        // speed   
        image(pill, this.x, this.y, this.width, this.height);
    }


}