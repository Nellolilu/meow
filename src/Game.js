
// ***** BUGS
// COLLISIONCHECKS ON MANY // Maybe back to old version
// WHY DO I HAVE TO PUT LEVEL THREE IN ORDER BEFORE TWO?


// ***** STYLE DECISIONS
// LET OBSTACLE DISSAPREAR AFTER COLISION?    this.obstaclesGrow.splice(index, 1);
// CHANGE TIMING OF OBSTACLES: first framecount, then pace, a random?
// CAN YOU CHANGE WIDTH OF CANVAS? CHANGE WIDTH = Make it 1000 and other borders for the Player in other Levels??
// LEVEL 3 assigning new posion doesnt work with move function
// LEVEL 3 - unfunction move up & move down?



class Game {
constructor () {
this.player = new Player(WIDTH/2.25, YBORDER );
this.exit = new Exit(); 
this.obstaclesGrow = [];
this.obstaclesBoost = [];
this.obstaclesMany = [];
this.many = false;
this.playersMany = [new Player(50,450), new Player(250, 500), new Player (300,200)];
this.turbo = false;
this.level1 = false;
this.level2 = true;
this.level3 = false;
this.enemy = new Enemy ();

}


  draw() {
    
    // **********  BASIC SETUP
    clear();

    // **********  LEVEL 3 
if (this.level3 === true) {
  background("red");
  this.turbo = true;
  this.player.drawLevel3Skills();
  // this.player.x = 0;
  // this.player.y = 60;
  this.enemy.draw();
  this.player.draw();
  if (this.collisionCheck(this.player, this.enemy)){
    this.player.steps *=-1
    console.log("HIT")
  }


 
}


      // TURBO CHECK
      if (this.turbo === true) {
        this.player.width = this.exit.height;
        this.player.height = this.exit.height
      }

      // MANY CHECK
      if (this.many === true) {
        this.playersMany.forEach((player) => {
          player.draw()
        })
      }


    // **********  LEVEL 2
   if(this.level2 === true) {
     background("yellow");
     this.player.draw();

     // EXIT
     this.exit.draw();
     if (this.collisionCheck(this.player, this.exit)) {
       console.log("whoop whoop next level is yet to come");
       if (this.player.height === this.exit.height) {
         this.level2 = false; 
         this.level3 = true;
         console.log("YOU REACHED THE NEXT LEVEL")
       }
     }

    // OBSTACLESGROW
  if (frameCount === 120 || frameCount % 800 === 0) {
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
   this.turbo = false
 };
   if (obstacle.y >= HEIGHT)
 this.obstaclesGrow.splice(index, 1);
});

    // OBSTACLES BOOST
      if (frameCount === 12 || frameCount % 1200 === 0) {
        this.obstaclesBoost.push(new ObstacleBoost());
      };
      this.obstaclesBoost.forEach((obstacle, index) => {
        obstacle.draw();
        if (this.collisionCheck(this.player, obstacle)) {
          this.many = false;
          this.turbo = true;
        };
        if (obstacle.y >= HEIGHT)
        this.obstaclesBoost.splice(index, 1);
      });
  
  // OBSTACLES MANY
        if ( frameCount === 2000 ||frameCount > 2400 && frameCount % 640 === 0) {
          this.obstaclesMany.push(new ObstacleMany());
        };

        this.obstaclesMany.forEach ((obstacle, index) => {
          obstacle.draw();
          if (this.collisionCheck(this.player, obstacle)) {
            this.player.width =  WIDTH/12;
            this.player.height = WIDTH/12;
                // how to say its original?
            this.many = true;
            this.turbo = false;

            // NEW LINE 
            // this.playersMany.push(this.player);
            // this.playersMany.forEach((player) => {
            //   if(this.collisionCheck(player, obstacle)) {
            //     player.width =  10;
            //     player.height = 10;
            //         // how to say its original?
            //     this.many = true;
            //     console.log("WWWWWWWWWWWWWORKS")
            //   }
            // });
          }
          if (obstacle.y >= HEIGHT)
          this.obstaclesMany.splice(index, 1);
        })

}



// **** GENERAL 

      // KEY IS DOWN

      if (keyIsDown(38)) {
        this.playersMany.forEach((player) => {
          player.moveUp()
        });
        this.player.moveUp();
        if (this.turbo === true) {
          this.player.steps = 100
      }
    }

      if (keyIsDown(39)) {
        this.playersMany.forEach((player) => {
          player.moveRight()
        });
        this.player.moveRight();
        if (this.turbo === true) {
          this.player.steps = 100
        } 
      }


      if (keyIsDown(40)) {
        this.playersMany.forEach((player) => {
          player.moveDown()
        });
        this.player.moveDown();
        if (this.turbo === true) {
          this.player.steps = 100
        } 
      }


      if (keyIsDown(37)) {
        this.playersMany.forEach((player) => {
          player.moveLeft()
        });
        this.player.moveLeft();
        if (this.turbo === true) {
          this.player.steps = 100
        }
      }
    }

    // **** NEXT FUNCTIONS 

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



    collisionEnemy(player, obstacle) {
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
      
      if (isTouchingOnRight) {
        this.player.moveLeft();
        console.log("IF YOU LOOK HERE, IT DIDNT WORK")
      }

      };


  





  keyPressed() {
    if (this.level3 === true) {
    this.player.keyPressed()
  }
}



}
