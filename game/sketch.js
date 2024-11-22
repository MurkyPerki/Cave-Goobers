//player var
playerX = 400;
playerY = 300;
playerW = 50;
playerH = 50;
playerSpeed = 10;
isJumping = false;
// playerPos = createVector(0, 0);
playerVelocity = 100;
playerGravity = 10;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(240, 240, 240);
    // player class functions
    let newPlayer = new Player(playerX, playerY, playerW, playerH);
    newPlayer.show();
    newPlayer.move();
    newPlayer.jump();
    newPlayer.gravity();

    console.log('player.y:' + playerY);

}

class Player {
    constructor(playerX, playerY, playerW, playerH) {
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerW = playerW;
        this.playerH = playerH;
        this.playerSpeed = playerSpeed;
        this.isJumping = isJumping;
        this.playerVelocity = playerVelocity;
        this.playerGravity = playerGravity;
        //this.playerPos = playerPos;
    }

    move() {
        // player left right movement
        if (keyIsDown(RIGHT_ARROW)) {
            playerX = playerX + playerSpeed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            playerX = playerX - playerSpeed;
        }
    }

    show() {
        noStroke();
        fill(0);
        rect(this.playerX, this.playerY, this.playerW, this.playerH);
    }

    jump() {
        if (keyIsDown(UP_ARROW) && !isJumping) {
            playerY -= playerVelocity;

            isJumping = true;
        }
    // if player.touchingGround reset isJumping true = false
    }
    
    //touchingGround()

    gravity() {
         playerVelocity += playerGravity;
    }
}
