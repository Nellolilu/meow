const game = new Game();

function preload() {};

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

