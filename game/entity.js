

class Entity {
    constructor() {
        this.isAlive = true;
        this.health = 100;
        

    }
    

    update() {
        this.move();
        this.applyGravity();
        this.updateCameraBox();
        this.updateCameraPosition();
    }

    render() {
        this.render();
        this.renderDebug();
        this.renderCameraBox();
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
}