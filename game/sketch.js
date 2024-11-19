//player var
playerX = 400;
playerY = 300;
playerW = 50;
playerH = 50;
playerSpeed = 10;
// playerJump = false;
// playerPos = (0, 0);
// playerVelocity = createVector(50, 50);
// playerGravity = 10;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(240, 240, 240);
    // player class functions
    let newPlayer = new Player(playerX, playerY, playerW, playerH);
    newPlayer.show();
    newPlayer.move();
    
}

class Player {
    constructor(playerX, playerY, playerW, playerH) {
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerW = playerW;
        this.playerH = playerH;
        this.playerSpeed = playerSpeed;
        // this.playerJump = playerJump;
        // this.playerVelocity = playerVelocity;
        // this.playerGravity = playerGravity;
        // this.playerPos = playerPos;
    }

    move() {
        // left right movement
        if (keyIsDown(RIGHT_ARROW)) {
            playerX = playerX + playerSpeed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            playerX = playerX - playerSpeed;
        }

        // jump
        // if (keyIsDown === BACKSPACE) {
        //     playerJump == true;
        // }

        // if (playerJump) {
        //  this.playerY = playerY + playerVelocity; 
        // }
    }

    show() {
        noStroke();
        fill(0);
        rect(this.playerX, this.playerY, this.playerW, this.playerH);
    }
}
