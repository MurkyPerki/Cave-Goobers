
let databaseManager;
let sceneManager;
let entityManager;

let player;

let baby;
let levelBG;
let pixelFont;

function preload() {
    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    tempSprite = loadImage('assets/images/goboo.png')
    baby = loadImage('assets/images/baby goober 3.png')
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //create bg object
    levelBG = new Sprite({
        position: {
            x: 0,
            y: 0,
        },
        imageSrc: 'assets/images/gameBG.png',
    })

    //initialize managers
    entityManager = new EntityManager();
    entityManager.initializeEntities();
    player = entityManager.player;

    createPlatformsTilemap2D(floorCollisions2)
}

function draw() {
    background(255);
    //camera
    let cameraY = windowHeight / 2 - player.cameraYPos;

    push();
    translate(0, cameraY);
    levelBG.render();
   
    player.handleCollsions(platforms);
    for (let platform of platforms) {
        platform.render();
    }
    entityManager.update();
    entityManager.render();
    pop();
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        player.jumpReleased();

    }
}

function createPlatformsTilemap2D(tilemap2D) {
    let tileWidth = width / tilemap2D[0].length;
    let tileHeight = tileWidth;

    platforms = [];
    for (let row = 0; row < tilemap2D.length; row++) {
        for (let col = 0; col < tilemap2D[row].length; col++) {
            let tileValue = tilemap2D[row][col];
            if (tileValue === 2) {
                let x = col * tileWidth;
                let y = row * tileHeight;
                platforms.push(new Platform(x, y, tileWidth, tileHeight))


            }
        }
    }
}




