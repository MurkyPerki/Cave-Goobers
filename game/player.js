//player var
// playerX = 400;
// playerY = 300;
// playerW = 50;
// playerH = 50;

// playerJump = false;
// playerPos = (0, 0);
// playerVelocity = createVector(50, 50);
// playerGravity = 10;

let newPlayer


function setup() {
    createCanvas(800, 600);
    newPlayer = new Player(400, 400, 20, 20);
}

function draw() {
    background(240, 240, 240);
    // player class functions
    
    newPlayer.show();
    newPlayer.move();
    
}

class Player {
    constructor(playerX, playerY, playerW, playerH) {
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerW = playerW;
        this.playerH = playerH;
        this.playerSpeed = 3
        // this.playerJump = playerJump;
        // this.playerVelocity = playerVelocity;
        // this.playerGravity = playerGravity;
        // this.playerPos = playerPos;
    }

    move() {
        // left right movement
        if (keyIsDown(RIGHT_ARROW)) {
            this.playerX = this.playerX + this.playerSpeed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.playerX = this.playerX - this.playerSpeed;
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
