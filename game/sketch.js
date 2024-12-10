
// let entities = [];
let platforms = [];
let collision;
let player;

let img;
let pixelFont;

let canvasWidth = 1200
let canvasHeight = 4000

// let camera = {x: 0, y: 0, width: 800, height: 600};


function preload() {
    
   pixelFont = loadFont('pixelFont.ttf');
  // img = loadImage('assets/images/game_background (1).jpg')
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);

   

   
    // class instances
    player = new Player(400, 700, 50, 50);
    
    
    //test ground
    platforms.push(new Platform(0, 750, 1500, 50));
    platforms.push(new Platform(600, 600, 300, 50));



}

function draw() {
    //background(img, 1200, 4000);
    background(255);

    translate (canvasWidth/3 - player.x, canvasHeight/2 - player.y);
    // translate (player.x + width / 2, -player.y + height / 2)

    fill (0)
    textFont(pixelFont);
    textSize(32);
    text("hello world", 50, 50);

    // player
    player.update();
    player.handleCollsions(platforms);

    // console.log(platforms)

    for (let platform of platforms) {
        platform.render();
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        player.jumpReleased();
        
    }
}

// let entities = [
//     new Player(playerX, playerY, playerW, playerH),
//     new Enemy(),
//     new Enemy(),
// ]
// for (let index = 0; index < entities.length; index++) {
//     const entity = entities[index];
//     entity.update();
// }

// console.log('player.y:' + playerY);