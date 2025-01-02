
class EntityManager {
    constructor() {
        this.player = new Player(400, 700, 100, 100);
        this.enemies = [];
        this.items = [];
        this.platforms = [];
       

        this.levelBG = new Sprite({
            position: {
                x: 0,
                y: 0,
            },
            imageSrc: 'assets/images/gameBG.png',
        })
    }

    initializeEntities() {
        //enemies
        this.enemies.push(new Enemy(10, 200, 30, 30));
        this.enemies.push(new WindEnemy(200, 700, 30, 30));
        //items
        this.items.push(new Item(750, 500, 100, 80, this.items))
        this.items.push(new Item(100, 350, 100, 80, this.items))
        this.items.push(new Item(900, 200, 100, 80, this.items))
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
        //console.log(this.platforms) yes working
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
        this.levelBG.render();
        this.player.render();

        for (let enemy of this.enemies) {
            enemy.render();
        }
        for (let item of this.items) {
            item.render();
        }
        //platform is undefined but why??????
        // for (platform of this.platforms) {
        //     console.log(platform)
        //     platform.render();
        // }
      
    }
}