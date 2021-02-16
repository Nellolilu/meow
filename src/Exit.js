class Exit {
    constructor() {
        this.height = WIDTH /24
        this.width = WIDTH / 24
        this.x = WIDTH-10
        this.y = 60
    }

    draw() {
        fill("blue");
        rect(this.x, this.y, this.width, this.height);
    }

}