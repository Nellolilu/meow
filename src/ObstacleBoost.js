class ObstacleBoost {
        constructor() {
            this.x = random(0, WIDTH-10);
            this.y = 0;
            this.height = 10
            this.width = 10
        }
    
    
        draw() {
            fill("lightyellow");
            this.y += 1;
            // speed   
            ellipse(this.x, this.y, this.width, this.height);
        }

    
}