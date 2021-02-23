class Exit {
    constructor() {
        this.x = WIDTH-5
        this.y = 60
        this.width = 5
        this.height = 20

    }

    draw() {
        fill("blue");
        rect(this.x, this.y, this.width, this.height);
    }

}