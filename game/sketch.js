
//managers
let drawManager;
let databaseManager;
let entityManager;
let sceneManager; // if necessarry
let gameScreen;
let start = true;
let bossDefeated = false;
let playerDefeated = false;
let gameState;

//sprites/fonts
let baby;
let levelBG;
let pixelFont;
let startScreen;
let endScreen;
let restartScreen;

function preload() {
    pixelFont = loadFont('assets/fonts/pixelFont.ttf')
    tempSprite = loadImage('assets/images/goboo.png')
    baby = loadImage('assets/images/baby goober 3.png')
    startScreen = loadImage('assets/images/startscreenBackground.jpg')
    endScreen = loadImage('assets/images/endscreenBG.jpg')
    restartScreen = loadImage('assets/images/restartscreenBG.jpg')
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
 gameScreen.startgame();
 gameScreen.restartgame();
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        entityManager.player.jumpReleased();
    }
}
