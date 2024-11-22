
class Player extends Entity {
    constructor(playerX, playerY, playerW, playerH) {
        this.playerX = playerX;
        this.playerY = playerY;
        this.playerW = playerW;
        this.playerH = playerH;
        this.playerSpeed = 10;
        this.isJumping = false;
        this.playerVelocity = 0;
        this.playerGravity = 10;
        //this.playerPos = playerPos;
    }

    // die() {
    //     super.die();

    //     SwitchToStartScreen();
    // }

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
        rect(playerX, playerY, playerW, playerH);
    }

    jump() {
        if (keyIsDown(UP_ARROW) && !isJumping) {
            playerY -= playerVelocity;

            isJumping = true;
        }
        // if player.touchingGround reset isJumping true = false
    }

    gravity() {
        if (playerY < 300)
        playerVelocity += playerGravity;
    }
}