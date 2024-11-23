class Player extends Entity {
    constructor(playerX, playerY, playerW, playerH) {
        super();
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerW = playerW;
        this.playerH = playerH;
        this.playerSpeed = 10;
        this.isJumping = false;
        this.playerVelocity = 0;
        this.playerGravity = 2;
    }

    move() {
        // player left right movement
        if (keyIsDown(RIGHT_ARROW)) {
            this.playerX = this.playerX + this.playerSpeed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.playerX = this.playerX - this.playerSpeed;
        }
        if (keyIsDown(UP_ARROW) && !this.isJumping) {
            this.playerVelocity = 20
            this.isJumping = true;
        }
    }

    show() {
        noStroke();
        fill(0);
        rect(this.playerX, this.playerY, this.playerW, this.playerH);
    }

    jump() {
        // update player y pos
        this.playerY -= this.playerVelocity;

        if (this.playerY < 300) {
            this.playerVelocity -= this.playerGravity;
        }
        if (this.playerY >= 300) {
            this.playerVelocity = 0;
            this.playerY = 300;
            this.isJumping = false;
        }
        // if player.touchingGround reset isJumping true = false
    }

}

// die() {
//     super.die();

//     SwitchToStartScreen();
// }
