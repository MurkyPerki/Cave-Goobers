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
        this.jumpCount = 0;
        this.maxJump = 1;

        // this.maxJumpHeight = 40;
        // this.minJumpHeight = 20;
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
        if ((keyIsDown(UP_ARROW) || keyIsDown(32))
            && !this.isJumping
        //jumpcount so the player can only jump once until mouse released
            && this.jumpCount < this.maxJump) {
            this.playerVelocity = 36;
            this.isJumping = true;
            this.jumpCount++;
        }
    }

    render() {
        noStroke();
        fill(0);
        rect(this.x, this.y, this.width, this.height);

        console.log(this.y)
    }


    handleCollsions(collision, platforms) {


        Collision.handleCollisions(this, platforms);

        if (this.isGrounded) {
            // But the collision code might already be handling the snapping.
        } else {
            this.isFalling = true;
        }

    }


    // landOnPlatform(platform) {
    //     this.y = platform.y - this.height; // makes it so hat player sticks to top of the platform
    //     this.isJumping = false
    //     this.playerVelocity = 0;
    // }


    jump() {
        // update player y pos
        this.y -= this.playerVelocity;
        //console.log('velocity='+this.playerVelocity)

        if (this.isJumping || this.isFalling) {
            this.playerVelocity -= this.playerGravity;
            this.isFalling = true;
        }
        else if (this.onPlatform) {
            this.playerVelocity = 0;
            this.isJumping = false;
        }
    }

    jumpReleased() {
        //reset jump count (when key released)
        this.jumpCount = 0;

        //if key released velocity halves so that player can hold jump
        if (this.isJumping) {
            this.playerVelocity = this.playerVelocity / 2;
        }
    }


    renderDebug(){

        noStroke();
    fill(0);
    rect(this.x, this.y, this.width, this.height);

    // Debug information
    fill(255);
    textSize(12);
    text('Frame: ' + frameCount, 50, 50);
    text('Velocity: ' + this.playerVelocity, 50, 65);
    text('Position: (' + this.x + ', ' + this.y + ')', 50, 80);

    if (this.isGrounded) {
        fill(0, 255, 20);
        text('isGrounded: ' + this.isGrounded, 50, 100);
    } else {
        fill(255, 0, 0); // Red when in the air
        text('isGrounded: ' + this.isGrounded, 50, 100);
    }

    if (this.isJumping) {
        fill(0, 255, 20);
        text('isJumping: ' + this.isJumping, 50, 115);
    } else {
        fill(255, 0, 0); // Red when not jumping
        text('isJumping: ' + this.isJumping, 50, 115);
    }



    }
}
