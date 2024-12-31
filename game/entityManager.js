
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.entities = [];
        //this.player = new Player(400, 700, 100, 100);
    }

    initializeEntities() {
        //this.entities.push(new Player(400, 700, 100, 100));
        this.entities.push(new Enemy(10, 200, 30, 30));
        this.entities.push(new WindEnemy(200, 700, 30, 30));
    }

    update() {
        this.player.update();
        for (let entity of this.entities) {
            entity.update(this.player);
        }
    }

    render() {
        this.player.render();
        for (let entity of this.entities) {
            entity.render();
        }
    }

    // render() {
    //     this.render();
    //     this.renderDebug();
    //     this.renderCameraBox();
    // }




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