const game = new Game();

function preload() {
  // BACKGROUND
  bgImage = loadImage("./assets/street.png");
  level2Image = loadImage("./assets/bg2.png");
  // ENEMY
  pig = loadImage("./assets/pig.png");
  // OBSTACLES
  rat = loadImage("./assets/rat1.png");
  fish = loadImage("./assets/fish.png");
  pill = loadImage("./assets/pill.png");
  // PLAYER
  kitty = loadImage("./assets/kSteht.png");
  hinten1 = loadImage("./assets/kHinten1.png");
  hinten1f = loadImage("./assets/kHinten1.png");
  hinten2 = loadImage("./assets/kHinten2.png");
  links1 = loadImage("./assets/kLink1.png");
  links2 = loadImage("./assets/kLinks2.png");
  links1f = loadImage("./assets/kLink1.png");
  rechts1 = loadImage("./assets/kRechts1.png");
  rechts2 = loadImage("./assets/kRechts2.png");
  rechts1f = loadImage("./assets/kRechts1.png");
  vorne1 = loadImage("./assets/kVorne1.png");
  vorne2 = loadImage("./assets/kVorne2.png");
  vorne1f = loadImage("./assets/kVorne1.png");
  // SOUND
  sound1 = loadSound("./assets/level1_opt1.mp3");
  sound2 = loadSound("./assets/level2_opt1.mp3");
  // soundCat = loadSound("./assets/pigS.mp3");
  // soundPig = loadSound("./assets/catS.mp3");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  sound1.play();
  sound1.setVolume(0.1);
  sound2.setVolume(0.1);
}

function draw() {
  game.draw();
}

function keyPressed() {
  game.keyPressed();
}
