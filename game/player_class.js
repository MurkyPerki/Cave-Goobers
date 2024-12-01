class Player extends Entity {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.playerSpeed = 10;
        this.playerVelocity = 0;
        this.playerGravity = 2;
        this.isJumping = false;
        this.isFalling = false;
        this.onPlatform = false;

        this.maxJumpHeight = 40;
        this.minJumpHeight = 20;
        // this.jumpTimeCounter = jumpTimeCounter;
        // this.jumpTime = jumpTime;
    }

    move() {
        // player left right movement
        if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68))) {
            this.x = this.x + this.playerSpeed;
        }
        if ((keyIsDown(LEFT_ARROW) || keyIsDown(65))) {
            this.x = this.x - this.playerSpeed;
        }
        // player jump
        if ((keyIsDown(UP_ARROW) || keyIsDown(32)) && !this.isJumping) {
            this.playerVelocity = 36;
            this.isJumping = true;
        }
        //if the key is down => playerVelocity gets more until maximum jump
    }

    render() {
        noStroke();
        fill(0);
        rect(this.x, this.y, this.width, this.height);
    }


    handleCollsions(collision, platforms) {
        this.onPlatform = false;

        for (let platform of platforms) {
            if (collision.isCollidingAABB(this, platform)) {
                this.landOnPlatform(platform)
                this.onPlatform = true
            }
        }

        if (!this.onPlatform) {
            this.isFalling = true;
        }

    }


    landOnPlatform(platform) {
        this.y = platform.y - this.height; // makes it so hat player sticks to top of the platform
        this.isJumping = false
        this.playerVelocity = 0;
    }


    jump() {
        // update player y pos
        this.y -= this.playerVelocity;
        //console.log('velocity='+this.playerVelocity)

        if (this.isJumping || this.isFalling) {
            this.playerVelocity -= this.playerGravity;
        }
        else if (this.onPlatform) {
            this.playerVelocity = 0;
            this.isJumping = false;
        }
    }

    jumpReleased() {
        if (this.isJumping) {
            this.playerVelocity = this.playerVelocity / 2;
        }
    }
}
