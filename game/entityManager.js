
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.enemies = [];
        this.items = [];
        this.platforms = [];
        this.projectiles = []
        this.collidables = [];
        this.triggerBox

        this.levelBG = new Sprite({
            position: {
                x: 0,
                y: 0,
            },
            imageSrc: 'assets/images/gameBG.png',
        });
    }

    initializeEntities() {
        //enemies
        // this.enemies.push(new Enemy(10, 200, 30, 30));
        // this.enemies.push(new WindEnemy(200, 700, 30, 30));
        //items
        this.items.push(new Item(750, 500, 100, 80, this.items))
        this.items.push(new Item(100, 350, 100, 80, this.items))
        this.items.push(new Item(900, 200, 100, 80, this.items))
        //boss level triggerBox
        this.triggerBox = new TriggerBox(0, 1000 , width, 50)

        //platforms
        this.createPlatformsTilemap2D(floorCollisions2);
        this.collidables = [...this.platforms, ...this.enemies];
    }

    createPlatformsTilemap2D(tilemap2D) {
        let tileWidth = width / tilemap2D[0].length;
        let tileHeight = tileWidth;

        // this.platforms = [];
        for (let row = 0; row < tilemap2D.length; row++) {
            for (let col = 0; col < tilemap2D[row].length; col++) {
                let tileValue = tilemap2D[row][col];
                if (tileValue === 2) {
                    let x = col * tileWidth;
                    let y = row * tileHeight;
                    this.platforms.push(new Platform(x, y, tileWidth, tileHeight))
                }
            }
        }
    }

    update() {
        // this.player.update(this.collidables);
        PhysicsSystem.updatePlayer(this.player, this.collidables);
        PhysicsSystem.updateEnemies(this.enemies, this.platforms, this.player);

        if (this.triggerBox) {
            this.triggerBox.update(this.player);
        }

        for (let item of this.items) {
            item.update(this.player);
        }

        PhysicsSystem.updateProjectiles(this.projectiles, this.player, this.platforms);
    }

    render() {
        this.levelBG.render();
        this.player.render();

        for (let enemy of this.enemies) {
            enemy.render();
        }
        for (let item of this.items) {
            item.render();
        }
        for (let projectile of this.projectiles) {
            projectile.render();
        }
        for (let platform of this.platforms) {
            // console.log(platform)
            platform.render();
        }

        // render trigger box
        if (this.triggerBox) {
        this.triggerBox.render();
        }
    }

    loadBossLevel() { 

        //clear old level arrays etc.
        entityManager.enemies = [];
        entityManager.platforms = [];
        entityManager.projectiles = [];
        entityManager.items = [];
        entityManager.collidables = [];

        entityManager.levelBG = new Sprite({
            position: { x: 0, y: 0},
            imageSrc: 'assets/images/gameBG.png',
        });

        // instancing new boss
        let boss = new Boss(500,300 , 150, 150);
        entityManager.enemies.push(boss);


        // different player position
        entityManager.player.x = 200;
        entityManager.player.y = 400;

        // maybe track game state? 
    }
}