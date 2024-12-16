
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
let bgImageHeight = 2196;
let scaledCanvas = {
    width: canvasWidth / 1.6,
    height: canvasHeight / 1.6,
}

// let camera = {x: 0, y: 0, width: 800, height: 600};


function preload() {
    
   pixelFont = loadFont('pixelFont.ttf');
   img = loadImage('assets/images/Background.jpg')
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);

    levelBG = new Sprite({
      position: {
        x: 0,
        y: 0, //-3200
      },
      imageSrc: 'assets/images/Background.jpg',
    })
   
    // class instances
    player = new Player(400, 700, 50, 50);
    
    //test ground
    platforms.push(new Platform(0, 1030, 1920, 50));
    //platforms.push(new Platform(600, 600, 300, 50));



}

function draw() {
    background(img);

    //starting pos translate
    translateX = 0;
    //aligns background
    translateY = -bgImageHeight + scaledCanvas.height;

    push();
    scale(1.6);
    translate (translateX, translateY);
    levelBG.update();
    pop();

    // player
    player.update();
    player.handleCollsions(platforms);
    for (let platform of platforms) {
        platform.render();
    }

    let platformCollisions2D = [];
    for(leti = 0; i < platformCollisions2D.length; i += 35){
        platformCollisions2D.push(platformCollisions.slice(i, i + 35));
    }

    let collisionBlocks = [];
    platformCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
    if(symbol === 2) {
        collisionBlocks.push(new CollisionBlock(y * 18, x * 18))
    }
    })
    })

    for(let collisionBlock of collisionBlocks) {
        collisionBlock.show();
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
