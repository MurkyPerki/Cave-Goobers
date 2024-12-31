
//managers
let databaseManager;
let sceneManager;
let entityManager;

//sprites/fonts
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

    //initialize managers
    entityManager = new EntityManager();
    entityManager.initializeEntities();
}

function draw() {
    background(255);
    //camera
    let cameraY = windowHeight / 2 - entityManager.player.cameraYPos;

    push();
    translate(0, cameraY);
    entityManager.player.handleCollsions(entityManager.platforms);
    // platforms are defined here in sketch but i want to render from entityManager >:(
    // for (let platform of entityManager.platforms) {
    //     platform.render();
    // }
    entityManager.update();
    entityManager.render();
    pop();
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        entityManager.player.jumpReleased();
    }
}





