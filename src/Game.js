class Game {
constructor () {
this.player = new Player();
this.exit = new Exit(); 
this.obstacles = []
}


  draw() {
    clear();
    background("yellow");
    this.player.draw();
    this.exit.draw();

    if (frameCount % 240 === 0) {
      this.obstacles.push(new Obstacle());
    };
    this.obstacles.forEach( (obstacle, index) => {
      obstacle.draw();
      if (obstacle.y >= HEIGHT)
      this.obstacles.splice(index, 1);
    })
  }


  keyPressed() {
    if (keyCode === 38) {
      this.player.moveUp(12);
    }
    if (keyCode === 37) {
      this.player.moveLeft(12);
    }
    if (keyCode === 39) {
      this.player.moveRight(12);
    }
    if (keyCode === 40) {
      this.player.moveDown(12);
    }
  }
}
