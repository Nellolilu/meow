// // CONSTRUCTORS
const WIDTH = 400;
const HEIGHT = 600;
const XBORDER = WIDTH - 50;
const YBORDER = HEIGHT - 50;
const GRAVITY = 0.2;

// // DOM
const speed = document.getElementById("speed");
const score = document.getElementById("score");
const shitShat = document.getElementById("shit-shat");
// couldn erase both... so strage workaround...
const sides = document.getElementById("sides");
const sides2 = document.querySelector(".sides");

// // IMAGES

//PLAYER
let kitty;
// ENEMY
let pig;
// OBSTACLES
let rat;
let fish;
let pill;

//BACKGROUND
let bgImage;
let level2Image;

//PLAYER ANIMATION
let hinten1;
let hinten1f;
let hinten2;

let links1;
let links2;
let links1f;

let rechts1;
let rechts2;
let rechts1f;

let vorne1;
let vorne2;
let vorne1f;

// // SOUND
let sound1;
let sound2;
let soundCat;
let soundPig;
