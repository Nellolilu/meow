const game = new Game();

function preload() {
  // ENEMY
  jabba = loadImage("./assets/taube.gif");

  // OBSTACLES
  steak = loadImage("./assets/ratte.jpg");
  pill = loadImage("./assets/fish.png");
  keys = loadImage("./assets/platformPack_item014.png");

// BACKGROUND

  bgImage = loadImage("./assets/street.png");
  level2Image = loadImage("./assets/platformPack_item014.png");

  // KATZE

  kittyGif = loadImage("./assets/katze_vorn.gif");
  // kittyGif = createImg("./assets/katze_vorn.gif");
  // kittyGif.position(40, 40);
  kitty = loadImage("./assets/kSteht.png");

  hinten1 = loadImage("./assets/kHinten1.png");
  hinten2 = loadImage("./assets/kHinten2.png");
  links1 = loadImage("./assets/kLink1.png");
  links2 = loadImage("./assets/kLinks2.png");
  rechts1 = loadImage("./assets/kRechts1.png");
  rechts2 = loadImage("./assets/kRechts2.png");
  vorne1 = loadImage("./assets/kVorne1.png");
  vorne2 = loadImage("./assets/kVorne2.png");
  sound1 = loadSound("./assets/level1_opt1.mp3")
  sound2 = loadSound("./assets/level2_opt1.mp3")

  // sequenceAnimation = loadAnimation("./assets/kHinten1.png", "./assets/kHinten2.png");
  // glitch = loadAnimation("data/dog.png", "data/horse.png", "data/cat.png", "data/snake.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  sound1.play();
  sound1.setVolume(0.5);
  sound1.stop()
  // sound2.play();
  // sound2.stop()


  
  // kittyGif = loadGif("./assets/katze_vorn.gif")
}

function draw() {
  game.draw();
}

function keyPressed() {
  game.keyPressed();
}
