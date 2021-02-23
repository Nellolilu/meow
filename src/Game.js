

// ***** BUGS
// Change back the speed / turbo doesnt work

// create buttons & Pictures for info & Score & so on
// Check out dom Manipulation

// ***** STYLE DECISIONS

// MANY are moved before seen - maybe make a different class, and new Push or even create a back to origin function
// Player is coming down from left
// CAN YOU CHANGE WIDTH OF CANVAS? CHANGE WIDTH = Make it 1000 and other borders for the Player in other Levels??

class Game {
  constructor() {
    this.player = new Player(180, 520);
    this.exit = new Exit();
    this.obstaclesGrow = [];
    this.obstaclesBoost = [];
    this.obstaclesMany = [];
    this.many = false;
    this.playersMany = [
      new Player(100, 550),
      new Player(150, 600),
      new Player(300, 550),
    ];
    this.test = [new Player(100, 100)];
    this.turbo = false;
    this.level1 = false;
    this.level2 = true;
    this.level3 = false;
    this.enemys = [new Enemy(180, 200)];
    this.round1 = true;
    this.round2 = false;
    this.round3 = false;
    this.loose = false;

  }

  draw() {
    // **********  BASIC SETUP
    clear();

    console.log("ScoreJump:" + this.player.scoreJump);
    console.log("Enemys:" + this.enemys.length);
    console.log("Framecount:" + frameCount);
    console.log("ObstaclesMany:" + this.obstaclesGrow.length);
    console.log("ObstaclesGrow:" + this.obstaclesGrow.length);
    console.log("ObstaclesBoots:" + this.obstaclesBoost.length);
    console.log("PlayersMany:" + this.playersMany.length);

    // ********** LEVEL 1
    if (this.level1 === true) {
      background("gray");
      this.player.draw();
      this.player.color = "yellow";
    }

    // **********  LEVEL 2
    if (this.level2 === true) {
      background("yellow");
      this.player.draw();
      this.arrowDown();

      // EXIT
      this.exit.draw();
      if (this.collisionCheck(this.player, this.exit)) {
        console.log("whoop whoop next level is yet to come");
        if (this.player.height === this.exit.height) {
          this.level2 = false;
          this.level3 = true;
          console.log("YOU REACHED THE NEXT LEVEL");
        }
      }

      // OBSTACLESGROW
      if (frameCount === 120 || frameCount % 800 === 0) {
        this.obstaclesGrow.push(new ObstacleGrow());
      }
      this.obstaclesGrow.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          if (this.player.width < XBORDER) this.player.width++;
          this.player.height = this.player.width;
          console.log("Ups");
          this.turbo = false;
        }
        /// HERE TRY
        this.playersMany.forEach((player) => {
          if (this.collisionCheck(player, obstacle)) {
            if (player.width < XBORDER) player.width++;
            player.height = player.width;
          }
        });
        /////
        if (obstacle.y >= HEIGHT) this.obstaclesGrow.splice(index, 1);
      });

      // OBSTACLES BOOST
      if (frameCount === 1200 || frameCount % 1200 === 0) {
        this.obstaclesBoost.push(new ObstacleBoost());
      }
      this.obstaclesBoost.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          this.turbo = true;
        }
        /// HERE TRY
        this.playersMany.forEach((player) => {
          if (this.collisionCheck(player, obstacle)) {
            this.many = false;
            this.turbo = true;
          }
        });
        /////
        if (obstacle.y >= HEIGHT) this.obstaclesBoost.splice(index, 1);
      });

      // OBSTACLES MANY
      if (frameCount > 24 && frameCount % 640 === 0) {
        this.obstaclesMany.push(new ObstacleMany());
      }

      this.obstaclesMany.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.player.width = 40;
          this.player.height = 40;
          this.many = true;
          this.turbo = false;
        }
        this.playersMany.forEach((playerMany) => {
          if (this.collisionCheck(playerMany, obstacle)) {
            playerMany.width = 40;
            playerMany.height = 40;
          }
        });
        if (obstacle.y >= HEIGHT) this.obstaclesMany.splice(index, 1);
      });
    }

    // **********  LEVEL 3
    if (this.level3 === true) {
      background("red");
      this.turbo = true;
      this.player.drawLevel3Skills();
      this.player.draw();
      this.arrowDown();

      // ******** LEVEL3 ROUND 1
      if (this.round1 === true) {
        this.enemys.forEach((enemy) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            console.log("HIT");
            this.enemys.splice(0, 1);
            this.enemys.push(new Enemy(50, 100));
            this.enemys.push(new Enemy(200, 100));
            this.enemys.push(new Enemy(350, 100));
            this.round1 = false;
            this.round2 = true;
          }
        });
      }

      // ******** LEVEL3 ROUND 2

      if (this.round2 === true) {
        // Draw & Collisioncheck
        this.enemys.forEach((enemy, index) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            console.log("HIT");
            this.enemys.splice(index, 1);
          }
        });
        // move to center
        if (frameCount % 60 === 0) {
          this.enemys.forEach((enemy) => {
            enemy.moveToCenter();
            // merge // HERE MYBE THE REDUCE??
            if (enemy.y === 250) {
              if (this.enemys.length > 1) {
                this.enemys.splice(0, 1);
              }
              if (this.enemys.length >= 1) {
                console.log("YOU LOST");
                enemy.col = "yellow";
                this.loose = true;
                this.round2 = false;
              }
            }
          });
        }
        if (this.enemys.length <= 0) {
          this.enemys.push(new Enemy(50, 100));
          this.enemys.push(new Enemy(200, 100));
          this.enemys.push(new Enemy(350, 100));
          this.enemys.push(new Enemy(100, 80));
          this.enemys.push(new Enemy(150, 80));
          this.enemys.push(new Enemy(250, 80));
          this.round2 = false;
          this.round3 = true;
        }
      }

      // ******** LEVEL3 ROUND 3

      if (this.round3 === true) {
        // Draw & Collisioncheck
        this.enemys.forEach((enemy, index) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            console.log("HIT");
            this.enemys.splice(index, 1);
          }
        });
        // move to center
        if (frameCount % 60 === 0) {
          this.enemys.forEach((enemy) => {
            enemy.moveToCenter();
            // merge // HERE MYBE THE REDUCE??
            if (enemy.y === 250) {
              if (this.enemys.length > 1) {
                this.enemys.splice(0, 1);
              }
              if (this.enemys.length >= 1) {
                console.log("YOU LOST");
                enemy.col = "yellow";
                this.loose = true;
                this.round3 = false;
              }
              // if (this.enemys.length === 0) {
              //   // this.round2 = false;
              //   // this.round3 = true
              // };
            }
          });
        }
      }

      console.log(this.player.scoreJump);
      console.log(this.enemys);
      console.log(frameCount);

      // LOOSE

      if (this.loose === true) {
        this.enemys.forEach((enemy) => {
          enemy.draw();
          if (enemy.width < 300) {
            enemy.x = 50;
            enemy.height++;
            enemy.width++;
            frameCount = 0;
          }
          if (frameCount >= 90) {
            enemy.y = 290;
          }
        });
      }

      // LEVEL 3 closer:
    }

    // ************************************* GENERAL

    // TURBO CHECK
    if (this.turbo === true) {
      this.player.width = this.exit.height;
      this.player.height = this.exit.height;
    }

    // MANY CHECK
    if (this.many === true) {
      this.playersMany.forEach((player) => {
        player.draw();
      });
    }
  }

  // **** NEXT FUNCTIONS

  arrowDown() {
    // KEY IS DOWN
    if (keyIsDown(38)) {
      this.playersMany.forEach((player) => {
        player.moveUp();
      });
      this.player.moveUp();
      if (this.turbo === true) {
        this.player.steps = 100;
      }
    }

    if (keyIsDown(39)) {
      this.playersMany.forEach((player) => {
        player.moveRight();
      });
      this.player.moveRight();
      if (this.turbo === true) {
        this.player.steps = 100;
      }
    }

    if (keyIsDown(40)) {
      this.playersMany.forEach((player) => {
        player.moveDown();
      });
      this.player.moveDown();
      if (this.turbo === true) {
        this.player.steps = 100;
      }
    }

    if (keyIsDown(37)) {
      this.playersMany.forEach((player) => {
        player.moveLeft();
      });
      this.player.moveLeft();
      if (this.turbo === true) {
        this.player.steps = 100;
      }
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
    );
  }

  keyPressed() {
    if (this.level3 === true) {
      this.player.keyPressed();
    }
  }
}
