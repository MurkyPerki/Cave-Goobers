
//managers
let drawManager;
let databaseManager;
let entityManager;
let sceneManager; // if necessarry

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
    drawManager = new DrawManager();
    entityManager = new EntityManager();

    entityManager.initializeEntities();
}

function draw() {
    drawManager.managesAll();
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        entityManager.player.jumpReleased();
    }
}
