
//managers
let gameScreen;
let entityManager;
let drawManager;
let databaseManager;
let sceneManager; // if necessarry
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

    bossImage = loadImage('assets/images/boss.png');
    gooberSlotEmptyImg = loadImage('assets/images/slot.png');
    gooberSlotFilledImg = loadImage('assets/images/filled slot.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //initialize managers
    gameScreen = new Gamescreen();
    entityManager = new EntityManager();
    drawManager = new DrawManager();
    databaseManager = new Databasemanager();

    entityManager.initializeEntities();

}

function draw() {
    drawManager.managesAll();
}

function restartGame() {
   
    gameScreen.gameState = 'start';
    
  
    entityManager = new EntityManager();
    entityManager.initializeEntities();
    
   
    playerDefeated = false;
    bossDefeated = false;
    
    console.log("Game has restarted");
}

function keyPressed() {

    if (gameScreen.gameState === 'start' && key === ' ') {
        gameScreen.startgame();
    } else if ((gameScreen.gameState === 'end' || gameScreen.gameState === 'restart') && key === 'r') {
        restartGame();
    }
}

//this has to stay here
function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === 32) {
        entityManager.player.jumpReleased();
    }

    
}
