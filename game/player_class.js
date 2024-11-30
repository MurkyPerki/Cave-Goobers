class Player extends Entity {
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.playerSpeed = 10;
        this.isJumping = false;
        this.playerVelocity = 0;
        this.playerGravity = 2;
        this.onPlatform = false;
        this.isFalling = false;

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
            this.playerVelocity = 20
            this.isJumping = true;

        }
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

        if (!this.onPlatform){
            this.isFalling = true;
        }

    }


    landOnPlatform(platform) {
        this.y = platform.y - this.height; // makes it so hat player sticks to top of the platform
        this.isJumping = false
        // this.isFalling = false //? maybe should make a is falling? 
        this.playerVelocity = 0;
    }


    jump() {
        // update player y pos
        this.y -= this.playerVelocity;

        if (this.isJumping || this.isFalling) {
            this.playerVelocity -= this.playerGravity;
        }
        else if (this.onPlatform) {
            this.playerVelocity = 0;
            this.isJumping = false;
        }
    }
}

