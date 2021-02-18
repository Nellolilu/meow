// KEY DOWN NOT PRESSED

// MAKE SMALL FASTER

// COLLISIONCHECKS ON MANY

// CHANGE TIMING OF OBSTACLES: first framecount, then pace





class Game {
constructor () {
this.player = new Player(WIDTH/2.25, YBORDER );
this.exit = new Exit(); 
this.obstaclesGrow = [];
this.obstaclesBoost = [];
this.obstaclesMany = [];
// this.playerMany1= new Player(50,450);
// this.playerMany2= new Player(125,450);
// this.playerMany3= new Player(200,450);
// this.playerMany4= new Player(350,500);
// this.playerMany5= new Player(250, 500);
this.many = false
this.playersMany = [new Player(50,450), new Player(250, 500)]


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

    // MANY CHECK

    if (this.many === true) {
      // this.playerMany1.draw();
      // this.playerMany2.draw();
      // this.playerMany3.draw();
      // this.playerMany4.draw();
      // this.playerMany5.draw();
      this.playersMany.forEach((player) => {
        player.draw()
      })
    }


    // OBSTACLESGROW


    if (frameCount % 540 === 0) {
      this.obstaclesGrow.push(new ObstacleGrow());
    };
    this.obstaclesGrow.forEach( (obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        this.many = false;
        if (this.player.width < XBORDER)
        this.player.width ++;
        this.player.height = this.player.width; 
        console.log("Ups");
        // Hint for only once per Ostacle? - no loop kills whole game
        // try to let dissaper obstacle immediately
        // many
      }
      if (obstacle.y >= HEIGHT)
      this.obstaclesGrow.splice(index, 1);
    });

    // OBSTACLES BOOST

    if (frameCount % 540 === 0) {
      this.obstaclesBoost.push(new ObstacleBoost());
    };
    this.obstaclesBoost.forEach ((obstacle, index) => {
      obstacle.draw();
      if (this.collisionCheck(this.player, obstacle)) {
        this.many = false;
        this.player.width = this.exit.height;
        this.player.height = this.exit.height;
        // faster is not clear - check alternative keyis down and rewrite the code

      }
      if (obstacle.y >= HEIGHT)
      this.obstaclesBoost.splice(index, 1);
    });

        // OBSTACLES MANY

        if (frameCount % 540 === 0) {
          this.obstaclesMany.push(new ObstacleMany());
        };

        this.obstaclesMany.forEach ((obstacle, index) => {
          obstacle.draw();
          if (this.collisionCheck(this.player, obstacle)) {
            this.player.width =  WIDTH / 12;
            this.player.height = WIDTH / 12;
                // how to say its original?
            this.many = true;
          }
          if (obstacle.y >= HEIGHT)
          this.obstaclesMany.splice(index, 1);
        })

    
  }


  keyPressed() {
    if (keyCode === 38) {
      this.player.moveUp(12);
      this.playersMany.forEach((player) => {
        player.moveUp(12)
      })
      // this.playerMany1.moveUp(12);
      // this.playerMany2.moveUp(12);
      // this.playerMany3.moveUp(12);
      // this.playerMany4.moveUp(12);
      // this.playerMany5.moveUp(12);


    }
    if (keyCode === 37) {
      this.player.moveLeft(12);

      this.playersMany.forEach((player) => {
        player.moveLeft(12)
      })

      // this.playerMany1.moveLeft(12);
      // this.playerMany2.moveLeft(12);
      // this.playerMany3.moveLeft(12);
      // this.playerMany4.moveLeft(12);
      // this.playerMany5.moveLeft(12);
    }
    if (keyCode === 39) {
      this.player.moveRight(12);

      this.playersMany.forEach((player) => {
        player.moveRight(12)
      })

      // this.playerMany1.moveRight(12);
      // this.playerMany2.moveRight(12);
      // this.playerMany3.moveRight(12);
      // this.playerMany4.moveRight(12);
      // this.playerMany5.moveRight(12);
    }
    if (keyCode === 40) {
      this.player.moveDown(12);
      this.playersMany.forEach((player) => {
        player.moveDown(12)
      })

      // this.playerMany1.moveDown(12);
      // this.playerMany2.moveDown(12);
      // this.playerMany3.moveDown(12);
      // this.playerMany4.moveDown(12);
      // this.playerMany5.moveDown(12);
    }
  }

  // keyRelease() {
  //   up = false;
  // }

  // draw()
  //   if(up) this.player.moveup(speed * deltaTime) 

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
