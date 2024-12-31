
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.enemies = [];
        this.items = [];
    }

    initializeEntities() {
        this.enemies.push(new Enemy(10, 200, 30, 30));
        this.enemies.push(new WindEnemy(200, 700, 30, 30));
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
}