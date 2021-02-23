const game = new Game();

function preload() {
  jabba = loadImage("./assets/Jabba_SWSB.png");
  kitty = loadImage("./assets/kitty.PNG");
  steak = loadImage("./assets/steak.PNG");
  diamond = loadImage("./assets/diamond.png");
};

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.draw();
}

function keyPressed() {
  game.keyPressed();
}

