class Game {
constructor () {
this.player = new Player();
this.exit = new Exit(); 
this.obstaclesGrow = [];
this.obstaclesBoost = []
}


  draw() {
    
    // BASIC SETUP
    clear();
    background("yellow");
    this.player.draw();
    
    

    // EXIT
    this.exit.draw();
    if (this.collisionCheck(this.player, this.exit)) {
      console.log("whoop whoop next level is yet to come")
      // should only work if size matches (to avoid exit when too bid)
    }

    // OBSTACLESGROW

    if (frameCount % 240 === 0) {
      this.obstaclesGrow.push(new ObstacleGrow());
    };
    this.obstaclesGrow.forEach( (obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        if (this.player.width < XBORDER)
        this.player.width ++;
        this.player.height = this.player.width; 
        console.log("Ups");
        // Hint for only once per Ostacle? - no loop kills whole game
        // many
      }
      if (obstacle.y >= HEIGHT)
      this.obstaclesGrow.splice(index, 1);
    });

    // OBSTACLES BOOST

    if (frameCount % 120 === 0) {
      this.obstaclesBoost.push(new ObstacleBoost());
    };
    this.obstaclesBoost.forEach ((obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        this.player.width = this.exit.height;
        this.player.height = this.exit.height;
        // faster is not clear - check alternative keyis down and rewrite the code

      }
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

  collisionCheck(player, obstacle) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = obstacle.y;
    const obsLeftArea = obstacle.x;
    const obsRightArea = obstacle.x + obstacle.width;
    const obsBottomArea = obstacle.y + obstacle.height;


    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;
    return (
        isTouchingOnBottom &&
        isTouchingOnTop &&
        isTouchingOnRight &&
        isTouchingOnLeft
    )}


}
