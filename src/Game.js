// ***** BUGS
// Change back the speed / turbo doesnt work
// CHECK WINNING
// create buttons & Pictures for info & Score & so on
// Check out dom Manipulation
// key down deaktiv bei loose!

// ***** STYLE DECISIONS

// MANY are moved before seen - maybe make a different class, and new Push or even create a back to origin function
// Player is coming down from left
// maybe a reduce for enemy
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
    this.enemys = [new Enemy(190, 200)];
    this.round1 = true;
    this.round2 = false;
    this.round3 = false;
    this.loose = false;
  }

  draw() {
    // **********  BASIC SETUP
    clear();

    // console.log("ScoreJump:" + this.player.scoreJump);
    // console.log("Enemys:" + this.enemys.length);
    // console.log("Framecount:" + frameCount);
    // console.log("ObstaclesMany:" + this.obstaclesGrow.length);
    // console.log("ObstaclesGrow:" + this.obstaclesGrow.length);
    // console.log("ObstaclesBoots:" + this.obstaclesBoost.length);
    // console.log("PlayersMany:" + this.playersMany.length);

    // ********** LEVEL 1
    if (this.level1 === true) {
      background("gray");
      this.player.draw();
      this.player.color = "yellow";
    }

    // **********  LEVEL 2
    if (this.level2 === true) {
      console.log(
        "ARROWS BRING YOU TO THE NEXT LEVEL. FIND THE EXIT! ATTENTION. STUFF HAPPENING."
      );
      background("yellow");
      this.player.draw();
      if (this.loose === false) {
        this.arrowDown();
      }

      // EXIT
      this.exit.draw();
      if (this.collisionCheck(this.player, this.exit)) {
        console.log(
          "whoop whoop next level is yet to come - do you fit through the door?"
        );
        if (this.player.height === this.exit.height) {
          this.player.x -= 390;
          this.level2 = false;
          this.level3 = true;
          console.log("YOU REACHED THE NEXT LEVEL");
        }
      }

      // OBSTACLESGROW
      if (
        frameCount === 120 ||
        frameCount % 800 === 0 ||
        (frameCount > 1200 && frameCount % 300 === 0)
      ) {
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
            console.log("This is anoying");
          }
        });
        /////
        if (obstacle.y >= HEIGHT) this.obstaclesGrow.splice(index, 1);
      });

      // OBSTACLES BOOST
      if (
        frameCount % 1200 === 0 ||
        (frameCount > 1200 && frameCount % 400 === 0)
      ) {
        this.obstaclesBoost.push(new ObstacleBoost());
      }
      this.obstaclesBoost.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          this.turbo = true;
          console.log("quick, MOVE!");
        }
        /// HERE TRY
        this.playersMany.forEach((player) => {
          if (this.collisionCheck(player, obstacle)) {
            this.many = false;
            this.turbo = true;
            console.log("there is the right guy!");
          }
        });
        /////
        if (obstacle.y >= HEIGHT) this.obstaclesBoost.splice(index, 1);
      });

      // OBSTACLES MANY
      if (
        (frameCount > 24 && frameCount % 640 === 0) ||
        (frameCount > 1200 && frameCount % 200 === 0)
      ) {
        this.obstaclesMany.push(new ObstacleMany());
      }

      this.obstaclesMany.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.player.width = 40;
          this.player.height = 40;
          this.many = true;
          this.turbo = false;
          console.log("AWWW - who am I");
        }
        this.playersMany.forEach((playerMany) => {
          if (this.collisionCheck(playerMany, obstacle)) {
            playerMany.width = 40;
            playerMany.height = 40;
            console.log("who is how??? Go for the pill please!");
          }
        });
        if (obstacle.y >= HEIGHT) this.obstaclesMany.splice(index, 1);
      });
    }

    // **********  LEVEL 3
    if (this.level3 === true) {
      console.log("HIT THE THINGY, JUMPING IS HELPFUL. USE SPACE.");
      background("red");
      this.turbo = true;
      this.player.drawLevel3Skills();
      this.player.draw();
      if (this.loose === false) {
        this.arrowDown();
      }

      // ******** LEVEL3 ROUND 1
      if (this.round1 === true) {
        this.enemys.forEach((enemy) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            console.log("HIT");
            this.enemys.splice(0, 1);
            this.enemys.push(new Enemy(90, 100));
            this.enemys.push(new Enemy(185, 100));
            this.enemys.push(new Enemy(300, 100));
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
              if ((this.enemys.length = 1)) {
                console.log("YOU LOST");
                enemy.col = "";
                this.loose = true;
                this.round2 = false;
              }
            }
          });
        }
        if (this.enemys.length <= 0) {
          this.enemys.push(new Enemy(60, 100));
          this.enemys.push(new Enemy(310, 100));
          this.enemys.push(new Enemy(280, 130));
          this.enemys.push(new Enemy(210, 140));
          this.enemys.push(new Enemy(140, 150));
          this.enemys.push(new Enemy(165, 155));
          this.enemys.push(new Enemy(230, 175));
          this.enemys.push(new Enemy(280, 185));
          this.round2 = false;
          this.round3 = true;
        }
      }

      // ******** LEVEL3 ROUND 3

      if (this.round3 === true) {
        console.log("FUCK: MORE");
        // Draw & Collisioncheck
        this.enemys.forEach((enemy, index) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            console.log("HIT");
            this.enemys.splice(index, 1);
          }
        });
        // move to center
        if (frameCount % 30 === 0) {
          this.enemys.forEach((enemy) => {
            enemy.moveToCenter();
            // merge // HERE MYBE THE REDUCE??
            if (
              (enemy.y === 250 && enemy.x > 180) ||
              (enemy.y === 250 && enemy.x < 210)
            ) {
              if (this.enemys.length > 1) {
                this.enemys.splice(0, this.enemys.length - 1);
              }
              if ((this.enemys.length = 1)) {
                console.log("YOU LOST");
                // enemy.col = "yellow";
                this.loose = true;
                this.round3 = false;
              }
            }
          });
        }
      }

      // LOOSE

      if (this.loose === true) {
        this.enemys.forEach((enemy) => {
          enemy.draw();
          if (enemy.width < 300) {
            if (enemy.x > 50) {
              enemy.x--;
            }
            enemy.height++;
            enemy.width++;
            frameCount = 0;
          }
          if (frameCount >= 120) {
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
        player.moveUp(300);
      });
      if (this.turbo === true) {
        this.player.moveUp(100);
      } else {
        this.player.moveUp(300);
      }
    }
    if (keyIsDown(39)) {
      this.playersMany.forEach((player) => {
        player.moveRight(300);
      });
      if (this.turbo === true) {
        this.player.moveRight(100);
      } else {
        this.player.moveRight(300);
      }
    }
    if (keyIsDown(40)) {
      this.playersMany.forEach((player) => {
        player.moveDown(300);
      });
      if (this.turbo === true) {
        this.player.moveDown(100);
      } else {
        this.player.moveDown(300);
      }
    }
    if (keyIsDown(37)) {
      this.playersMany.forEach((player) => {
        player.moveLeft(300);
      });
      if (this.turbo === true) {
        this.player.moveLeft(100);
      } else {
        this.player.moveLeft(300);
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
    if (this.level3 === true && this.loose === false) {
      this.player.keyPressed();
    }
  }

  randomColor() {
    let a = random(0, 255);
    let b = random(0, 255);
    let c = random(0, 255);
    fill(a, b, c);
  }
}
