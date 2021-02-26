class ObstacleBoost {
        constructor() {
            this.x = random(0, WIDTH-20);
            this.y = 0;
            this.width = 15
            this.height = 15

        }


        draw() {
            fill("lightyellow");
            this.y += 3;
            // speed
            // ellipse(this.x, this.y, this.width, this.height);
            image(keys, this.x, this.y, this.width, this.height);
            
        }


}