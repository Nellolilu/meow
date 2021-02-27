// ADITIONS THAT DIDNT WORK:
// soundswitch at the end (pig/cat)

class Game {
  constructor() {
    this.background = new Background();
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
    this.level2 = true;
    this.level3 = false;
    this.enemys = [new Enemy(300, 100)];
    this.round1 = false;
    this.round2 = false;
    this.round3 = false;
    this.loose = false;
    this.speed = 0;
    this.score = 0;
    this.won = false;
    this.image = true;
  }

  draw() {
    // **********  BASIC SETUP
    clear();
    this.scoreTrack();

    // **********  LEVEL 2
    if (this.level2 === true) {
      this.background.draw();
      this.player.draw();
      if (this.loose === false) {
        this.arrowDown();
      }

      // EXIT
      this.exit.draw();
      if (this.collisionCheck(this.player, this.exit)) {
        shitShat.innerText =
          "whoop whoop next level is yet to come - do you fit through the door?";

        if (this.player.height === this.exit.height) {
          this.player.x -= 390;
          this.level2 = false;
          this.level3 = true;
          this.round1 = true;
          shitShat.innerText = "YOU REACHED THE NEXT LEVEL. YOU LUCKY CAT!";
          this.changeMusic();
        }
      }

      // OPENING TEXT
      if (frameCount === 90) {
        shitShat.innerText =
          "ARROWS BRING YOU TO THE NEXT LEVEL. FIND THE EXIT! ATTENTION. STUFF HAPPENING.";
      }

      // OBSTACLESGROW

      if (
        frameCount === 120 ||
        frameCount % 800 === 0 ||
        (frameCount > 1600 && frameCount % 300 === 0)
      ) {
        this.obstaclesGrow.push(new ObstacleGrow());
      }
      this.obstaclesGrow.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          if (this.player.width < XBORDER) this.player.width++;
          this.player.height = this.player.width;
          this.turbo = false;
        }
        // ON MANY
        this.playersMany.forEach((player) => {
          if (this.collisionCheck(player, obstacle)) {
            if (player.width < XBORDER) player.width++;
            player.height = player.width;
            shitShat.innerText =
              "Ups. Stop eating this shit. it just makes you fat.";
          }
        });
        // ELSE
        if (obstacle.y >= HEIGHT) this.obstaclesGrow.splice(index, 1);
      });
      // OBSTACLES BOOST
      if (
        frameCount % 1200 === 0 ||
        (frameCount > 1600 && frameCount % 400 === 0)
      ) {
        this.obstaclesBoost.push(new ObstacleBoost());
      }
      this.obstaclesBoost.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          this.turbo = true;
          shitShat.innerText = "quick, MOVE!";
        }
        // ON MANY
        this.playersMany.forEach((player) => {
          if (this.collisionCheck(player, obstacle)) {
            this.many = false;
            this.turbo = true;
            shitShat.innerText = "Go,go, go ,go!";
          }
        });
        // ELSE
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
          shitShat.innerText = "AWWW - who am I";
        }
        this.playersMany.forEach((playerMany) => {
          if (this.collisionCheck(playerMany, obstacle)) {
            playerMany.width = 40;
            playerMany.height = 40;
            shitShat.innerText =
              "who is how??? I feel dizzy - was something wrong with the fish? Go for the pill please!";
          }
        });
        if (obstacle.y >= HEIGHT) this.obstaclesMany.splice(index, 1);
      });
    }

    // **********  LEVEL 3
    if (this.level3 === true) {
      this.background.draw();
      bgImage = level2Image;
      this.player.width = 40;
      this.player.height = 40;
      shitShat.innerText = "JUMPING COULD DO IT. USE SPACE.";
      sides.style.display = "none";
      sides2.style.display = "none";
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
            this.enemys.splice(0, 1);
            this.enemys.push(new Enemy(90, 100));
            this.enemys.push(new Enemy(185, 100));
            this.enemys.push(new Enemy(270, 210));
            this.round1 = false;
            this.round2 = true;
          }
        });
      }

      // ******** LEVEL3 ROUND 2

      if (this.round2 === true) {
        shitShat.innerText = "GOOD JOB!";
        // Draw & Collisioncheck
        this.enemys.forEach((enemy, index) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
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
        shitShat.innerText = "FUCK: MORE";
        // Draw & Collisioncheck
        this.enemys.forEach((enemy, index) => {
          enemy.draw();
          if (this.collisionCheck(this.player, enemy)) {
            this.enemys.splice(index, 1);
          }
        });
        if (this.enemys.length < 5 && this.enemys.length > 2) {
          this.enemys.push(new Enemy(110, 200));
          this.enemys.push(new Enemy(160, 130));
          this.enemys.push(new Enemy(300, 330));
        }
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
                this.loose = true;
                this.round3 = false;
              }
            }
          });
        }
        if (this.enemys.length <= 0) {
          this.won = true;
          this.round3 = false;
        }
      }

      // LOOSE

      if (this.loose === true) {
        shitShat.innerText = "YOU LOST";
        shitShat.style.color = "yellow";
        shitShat.style.fontSize = "45px";

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
            enemy.y = 300;
          }
        });
      }

      // WIN

      if (this.won === true) {
        shitShat.innerText = "YOU WIN";
        shitShat.style.color = "yellow";
        shitShat.style.fontSize = "45px";

        if (this.player.width < 300) {
          if (this.player.x > 50) {
            this.player.x--;
          }
          this.player.height++;
          this.player.width++;
        }
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
      if (frameCount % 30 === 0) {
        hinten1 = hinten2;
      }
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
      if (frameCount % 30 === 0) {
        rechts1 = rechts2;
      }
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
      if (frameCount % 30 === 0) {
        vorne1 = vorne2;
      }
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
      if (frameCount % 30 === 0) {
        links1 = links2;
      }
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


  scoreTrack() {
    if (this.level2 === true) {
      level.innerText = "1";
    }
    if (this.round1 === true) {
      level.innerText = "2";
    }
    if (this.round2 === true) {
      level.innerText = "3";
    }
    if (this.round3 === true) {
      level.innerText = "4";
    }
    // can be a switch? dont know, forgot again
    if (this.level3 === true) {
      score.innerText = "JUMPSCORE: " + this.score;
    }

    if (frameCount % 60 === 0 && this.loose === false && this.won === false) {
      this.speed += 1;
      speed.innerText = this.speed;
    }
  }

  changeMusic() {
    if (this.level3) {
      sound1.stop();
      sound2.play();
      sound2.loop();
    }
 
  }
}
