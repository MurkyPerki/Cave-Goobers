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
        this.playerGravity = 10;
    }

    move() {
        // player left right movement
        if (keyIsDown(RIGHT_ARROW)) {
            this.playerX = this.playerX + this.playerSpeed;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.playerX = this.playerX - this.playerSpeed;
        }
    }

    show() {
        noStroke();
        fill(0);
        rect(this.playerX, this.playerY, this.playerW, this.playerH);
    }

    jump() {
        if (keyIsDown(UP_ARROW) && !isJumping) {
            this.playerY -= this.playerVelocity;

            this.isJumping = true;
        }
        // if player.touchingGround reset isJumping true = false
    }

    gravity() {
        if (this.playerY < 300)
            this.playerVelocity += this.playerGravity;
    }
}

// die() {
//     super.die();

//     SwitchToStartScreen();
// }
