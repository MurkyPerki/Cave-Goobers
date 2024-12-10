
// let entities = [];
let platforms = [];
let collision;
let player;
let item 

let img;
let pixelFont;

let canvasWidth = 1200
let canvasHeight = 4000


function preload() {
    
   pixelFont = loadFont('assets/fonts/pixelFont.ttf')
   img = loadImage('assets/images/game_background (1).jpg')
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);

   

   
    // class instances
    player = new Player(400, 700, 50, 50);

    item = new Item(750,500,35,35)
    
    //test ground
    platforms.push(new Platform(0, 750, 1500, 50));
    platforms.push(new Platform(600, 600, 300, 50));



}

function draw() {
    background(img, 240, 240, 50);

    fill (0)
    textFont(pixelFont);
    textSize(32);
    text("hello world", 50, 50);

    // player
    player.update();
    player.handleCollsions(platforms);

    // items
    

    for (let platform of platforms) {
        platform.render();
    }

    item.update();
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