
// let entities = [];
let platforms = [];
let collision;
let player;

let pixelFont;

function preload() {
   pixelFont = loadFont('/assets/fonts/pixelfont1.ttf/')
}


function setup() {
    createCanvas(1500, 800);

    textFont(pixelFont);
    text("hello", 50, 50)

   
    // class instances
    player = new Player(400, 700, 50, 50);
    collision = new Collision();
    
    //test ground
    platforms.push(new Platform(0, 750, 1500, 50));
    platforms.push(new Platform(600, 600, 300, 50));

    /*
    // platform test: random placement
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
        let x = (i%50) * 150 - random(10,40)
        let y = height / 5 * j + random(20,100)
        platforms.push(new Platform(x, y, 80, 50));
        }
    }
   */


}

function draw() {
    background(240, 240, 240, 50);

    // player
    player.update(platforms);
    //console.log('py=' + player.y);

    //check collision
    player.handleCollsions(collision, platforms);

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