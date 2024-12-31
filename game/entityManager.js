
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.enemies = [];
        this.items = [];
        //this.player = new Player(400, 700, 100, 100);
    }

    initializeEntities() {
        //this.entities.push(new Player(400, 700, 100, 100));
        this.enemies.push(new Enemy(10, 200, 30, 30));
       // this.entities.push(new WindEnemy(200, 700, 30, 30));
        this.items.push(new Item(750, 500, 100, 80, this.items))
        this.items.push(new Item(100, 350, 100, 80, this.items))
        this.items.push(new Item(900, 200, 100, 80, this.items))
    }

    update() {
        this.player.update();
        for (let enemy of this.enemies) {
            enemy.update(this.player);
        }
        for (let item of this.items) {
            item.update(this.player);
        }
    }

    render() {
        this.player.render();
        for (let enemy of this.enemies) {
            enemy.render();
        }
        for (let item of this.items) {
            item.render();
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