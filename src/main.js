const game = new Game();

function preload() {};

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.draw();
}

// checks for whenever we press a key
function keyPressed() {
  game.keyPressed();
}

