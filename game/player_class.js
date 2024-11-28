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

    render() {
        noStroke();
        fill(0);
        rect(this.playerX, this.playerY, this.playerW, this.playerH);
    }

    jump() {
        // update player y pos
        this.playerY -= this.playerVelocity;

        if (this.isJumping) {
            this.playerVelocity -= this.playerGravity;
        }
        if (this.playerY >= 300) {
            this.playerVelocity = 0;
            this.isJumping = false;
        }
        // if player.touchingGround reset isJumping true = false
    }

    handleCollsions(collision, platforms) {
        let onPlatform = false;

        for (let platform of platforms) {
            if (collision.isCollidingAABB(this, platform)) {
                this.landOnPlatform(platform)
                onPlatform = true
            }
        }

        // if you move of platform set falling to true 
        if (!onPlatform) {
            this.isFalling = true;
        }


    }


    landOnPlatform(platform) {
        this.y = platform.y - this.height; // makes it so hat player sticks to top of the platform
        this.isJumping = false
        this.isFalling = false //? maybe should make a is falling? 
        this.playerVelocity = 0;
    }

}

// die() {
//     super.die();

//     SwitchToStartScreen();
// }
