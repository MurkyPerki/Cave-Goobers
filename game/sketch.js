
// let entities = [];
let platforms = [];
let collision;
let player;

let img;
let pixelFont;

//resolution 1920 x 1080
let canvasWidth = 1920
let canvasHeight = 1080
let translateX;
let translateY;

let levelBG;
let bgImageHeight = 4000;
let scaledCanvas = {
    width: canvasWidth / 1.6,
    height: canvasHeight / 1.6,
}


function preload() {
    
   pixelFont = loadFont('pixelFont.ttf');
   img = loadImage('assets/images/game_background (1).jpg')
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);

    levelBG = new Sprite({
      position: {
        x: 0,
        y: 0, //-3200
      },
      imageSrc: 'assets/images/game_background (1).jpg',
    })
   
    // class instances 
    player = new Player(400, 300, 50, 50);
    
    //test ground
    platforms.push(new Platform(0, 400, 1920, 50));
    //platforms.push(new Platform(0, 1030, 1920, 50));
    //platforms.push(new Platform(600, 600, 300, 50));



}

function draw() {
    background(255);

    //starting pos translate
    translateX = 0;
    //aligns background
    translateY = -bgImageHeight + scaledCanvas.height;

    push();
    scale(1.6);
    translate (translateX, translateY);
    levelBG.render();
    pop();

    // player
    player.update();
    player.handleCollsions(platforms);
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
