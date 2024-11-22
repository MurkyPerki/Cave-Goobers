
function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(240, 240, 240);
   
    // player
    let newPlayer = new Player(400, 300, 50, 50);
    newPlayer.update();

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