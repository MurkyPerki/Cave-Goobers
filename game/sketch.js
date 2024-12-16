
// let entities = [];
let items = [];
let platforms = [];
let enemies = [];
let collision;
let player;
let item;
let enemy;

let img;
let pixelFont;

let canvasWidth = 1200
let canvasHeight = 4000


function preload() {

    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    img = loadImage('assets/images/game_background (1).jpg')
    tempSprite = loadImage('assets/images/goboo.png')
}


function setup() {
    createCanvas(canvasWidth, canvasHeight);




    // class instances
    player = new Player(400, 700, 100, 100);

    enemies.push(new Enemy(10, 200, 30, 30))

    enemies.push(new WindEnemy(200,300,30,30));

    items.push(new Item(750, 500, 35, 35))
    items.push(new Item(100, 350, 35, 35))
    items.push(new Item(900, 200, 35, 35))

    //test ground
    platforms.push(new Platform(0, 750, 1500, 50));
    platforms.push(new Platform(600, 600, 300, 50));



}

function draw() {
    background(img, 240, 240, 50);

    fill(0)
    textFont(pixelFont);
    textSize(32);
    text("hello world", 50, 50);

    // player
    player.update();
    player.handleCollsions(platforms);


    // temp draw wind enem
  
   



    for (let platform of platforms) {
        platform.render();
    }
    for (let item of items) {
        item.update();
    }
    for (let enemy of enemies) {
        
        enemy.update(player);
        
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