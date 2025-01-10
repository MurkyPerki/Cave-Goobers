
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.enemies = [];
        this.items = [];
        this.platforms = [];
        this.projectiles = []
        this.collidables = [];
        this.triggerBox;

        this.gooberSlots = [];

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
        this.triggerBox = new TriggerBox(0, 1000, width, 50)

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

        if (this.gooberSlots) {
            for (let slot of this.gooberSlots) {
                slot.update(this.player);
            }

            this.checkSlots();
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
        for (let slot of this.gooberSlots) {
            slot.render();
        }

        // render trigger box
        if (this.triggerBox) {
            this.triggerBox.render();
        }
    }

    loadBossLevel() {

        //clear old level arrays etc.
        this.enemies = [];
        this.platforms = [];
        this.projectiles = [];
        this.items = [];
        this.collidables = [];

        this.levelBG = new Sprite({
            position: { x: 0, y: 0 },
            imageSrc: 'assets/images/gameBG.png',
        });

        this.gooberSlots = [];

        for (let i = 0; i < 5; i++) {
            this.gooberSlots.push(new GooberSlots(300 + i * 60, 450))
        }

        // instancing new boss
        this.boss = new Boss(width / 2, 950, 150, 150, this);
        this.enemies.push(this.boss);


        // different player position
        this.player.x = 200;
        this.player.y = 400;

        //helper func for creating first set of platforms
        this.createBossPlatforms(this.platforms);

        this.collidables = [...this.platforms, ...this.enemies];

        // maybe track game state? 
    }

    createBossPlatforms() {

        this.platforms.push(new Platform(200, 500, 200, 50))
        this.platforms.push(new Platform(0, 1000, width, 50))
    }

    checkSlots() {
        
        if (this.gooberSlots.length === 0) {
            return;
        }

        
        let allFilled = true;
        for (let i = 0; i < this.gooberSlots.length; i++) {
            if (!this.gooberSlots[i].isFilled) {
                allFilled = false;
                break;
            }
        }

        
        if (allFilled) {
            
            this.boss.advancePhase();

            this.resetSlotsAndGoobers();
        }
    }

    resetSlotsAndGoobers() {

        for (let slot of this.gooberSlots) {
            slot.isFilled = false;
        }

        for (let i = 0; i < 5; i++) {
            const someX = random(100, 1000);
            const someY = random(100, 600);
            let gooberItem = new Item(someX, someY, 50, 50, this.items);
            this.items.push(gooberItem);
        }
    }
}