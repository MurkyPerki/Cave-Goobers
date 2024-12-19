
// let entities = [];
let items = [];
let platforms = [];
let enemies = [];
let collision;
let player;
let item;
let baby;
let img;
let levelBG;
let gameObbjecten = [];

let pixelFont;

function preload() {
    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    img = loadImage('assets/images/gameBG.png')
    tempSprite = loadImage('assets/images/goboo.png')
    baby = loadImage('assets/images/baby goober 3.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    levelBG = new Sprite({
        position: {
            x: 0,
            y: 0, //-3200
        },
        imageSrc: 'assets/images/gameBG.png',
    })

    // class instances
    player = new Player(400, 700, 100, 100);

    enemies.push(new Enemy(10, 200, 30, 30))

    enemies.push(new WindEnemy(200, 700, 30, 30));

    items.push(new Item(750, 500, 100, 80))
    items.push(new Item(100, 350, 100, 80))
    items.push(new Item(900, 200, 100, 80))

    createPlatformsTilemap2D(floorCollisions2)
}

function draw() {
    background(255);

    //Camera
    let cameraY = windowHeight / 2 - player.cameraYPos;

    push();
    translate(0, cameraY);

    levelBG.render();

    // player
    player.render();
    player.update();

    player.handleCollsions(platforms);

    for (let platform of platforms) {
        platform.render();
    }

    for (let item of items) {
        item.render();
        item.update();
    }
    for (let enemy of enemies) {
        enemy.render();
        enemy.update(player);
    }

    pop();
}

function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        player.jumpReleased();

    }
}

function createPlatformsTilemap2D(tilemap2D) {
    let tileWidth = width / tilemap2D[0].length;
    let tileHeight = tileWidth;

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
