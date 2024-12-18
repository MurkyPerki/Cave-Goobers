
// let entities = [];
let items = [];
let platforms = [];
let enemies = [];
let collision;
let player;
let item;
let enemy;

let baby;
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

    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    img = loadImage('assets/images/game_background (1).jpg')
    tempSprite = loadImage('assets/images/goboo.png')
    baby = loadImage('assets/images/baby goober 3.png')
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
   
    
    //test ground
    platforms.push(new Platform(0, 3680, 1920 / 1.6, 50 /1.6));
    platforms.push(new Platform(width / 3.2, 3580, 300/ 1.6, 50 / 1.6));

    // class instances
    player = new Player(400, 700, 100, 100);

    enemies.push(new Enemy(10, 200, 30, 30))

    enemies.push(new WindEnemy(200,300,30,30));

    items.push(new Item(750, 500, 80, 80))
    items.push(new Item(100, 350, 80, 80))
    items.push(new Item(900, 200, 80, 80))

    //test ground
    platforms.push(new Platform(0, 1030, 1920, 50));
    //platforms.push(new Platform(600, 600, 300, 50));

    createPlatformsTilemap2D(floorCollisions2)


}

function draw() {
    background(255);

    //starting pos translate
    translateX = 0;
    //aligns background
    translateY = scaledCanvas.height /2 - player.cameraYPos;

    push();
    scale (1.6);
    translate (translateX, translateY);
    console.log('translateY:' + translateY)
    
  
    levelBG.render();
    

    // player
    player.update();
    player.handleCollsions(platforms);
    
    for (let platform of platforms) {
        platform.render();
    }
    
    for (let item of items) {
        item.update();
    }
    for (let enemy of enemies) {
        
        enemy.update(player);
        
    }

    pop();
}

function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        player.jumpReleased();

    }
}




let tileWidth = 64;
let tileHeight = 64;

function createPlatformsTilemap2D(tilemap2D) {

    platforms = [];
    for (let row = 0; row < tilemap2D.length; row++) {
        for (let col = 0; col < tilemap2D[row].length; col++) {
            let tileValue = tilemap2D[row][col];
            if (tileValue === 2) {
                let x = col * tileWidth;
                let y = row * tileHeight;
                platforms.push(new Platform(x, y, tileWidth, tileHeight))


            }

        }

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
