class ObstacleBoost {
        constructor() {
            this.x = random(0, WIDTH-10);
            this.y = 0;
            this.width = 40
            this.height = 40

        }


        draw() {
            fill("lightyellow");
            this.y += 1;
            // speed
            // ellipse(this.x, this.y, this.width, this.height);
            image(keys, this.x, this.y, this.width, this.height);
            
        }


}