
let player
let platform1

function setup() {
    createCanvas(800, 600);
    
    player = new Player(400, 300, 50, 50);
    platform1 = new Platform(400, 350, 200, 50);

}

function draw() {
    background(240, 240, 240);

    // player
    player.update();
    platform1.show();

    //test-platform-1 AABB
    


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