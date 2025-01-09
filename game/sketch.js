
//managers
let drawManager;
let databaseManager;
let entityManager;
let sceneManager; // if necessarry
let gameScreen;
let start = false;
let startScreen;

//sprites/fonts
let baby;
let levelBG;
let pixelFont;

function preload() {
    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    tempSprite = loadImage('assets/images/goboo.png')
    baby = loadImage('assets/images/baby goober 3.png')
    startScreen = loadImage('assets/images/startscreenBackground.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //initialize managers
    drawManager = new DrawManager();
    entityManager = new EntityManager();
    gameScreen = new Gamescreen();

    entityManager.initializeEntities();

}

function draw() {
    drawManager.managesAll();
}

function keyPressed() {
    if (key === " ") {
        start = true;
    }
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        entityManager.player.jumpReleased();
    }

    
}
