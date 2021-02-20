class Enemy {
    constructor(){
        // this.x = WIDTH / 2,25
        // this.y = YBORDER + WIDTH / 24
        // // THIS IS VERY UGLY, makes things in one line, because Y border draws downwards!
        // this.height = -100
        // this.width = 20
        this.x = 200
        this.y = 500        
        this.height = 100
        this.width = 20
    
    }

    draw() {
        fill("lightblue");   
        rect(this.x, this.y, this.width, this.height)
    }
}
