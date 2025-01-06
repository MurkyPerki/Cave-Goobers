class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.horizontalVelocity = 0;
        this.playerSpeed = 12;
        this.verticalVelocity = 0;
        this.playerGravity = 2;
        this.isJumping = false;
        this.isFalling = false;
        this.onPlatform = false;
        this.jumpCount = 0;
        this.maxJump = 1;
        this.cameraYPos = this.y;

        this.cameraBox = {
            pos: {
                x: this.x,
                y: this.y,
            },
            width: 800,
            height: 600,
        }

        this.wallCollDetectionBoxLeft = {
            x: this.x - 25,
            y: this.y + 30,
            width: 25,
            height: 25,
        }

        this.wallCollDetectionBoxRight = {
            x: this.x + 25,
            y: this.y + 30,
            width: 25,
            height: 25,
        }
    }

    update(platforms) {
        this.walk();
        this.jump();
        this.applyGravity();
        this.updateCameraBox();
        this.updateCameraPosition();
        this.updateWallCollDectBox();
        this.checkWallColl(platforms);
    }

    render() {
        this.renderPlayer();
        // this.renderCameraBox();
        this.renderWallCollDectBox();
    }

    renderPlayer() {
        image(tempSprite, this.x, this.y, this.width, this.height)
        strokeWeight(3)
        //stroke(0, 255, 0);
        noFill();
        rect(this.x, this.y, this.width, this.height);
    }


    walk() {
        this.horizontalVelocity *= 0.5;
        //  left right movement
        if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68))) {
            this.horizontalVelocity = this.playerSpeed;
        }
        if ((keyIsDown(LEFT_ARROW) || keyIsDown(65))) {
            this.horizontalVelocity = -this.playerSpeed;
        }

    }

    jump() {
        // regular jump
        if ((keyIsDown(UP_ARROW) || keyIsDown(32))
            && !this.isJumping
            //jumpcount so the player can only jump once until released
            && this.jumpCount < this.maxJump
            && this.isGrounded) {
            this.verticalVelocity = 36;
            this.isJumping = true;
            this.isGrounded = false;
            this.jumpCount++;
        }

        // wall jump
        if ((keyIsDown(UP_ARROW) || keyIsDown(32))
            && !this.isJumping
            && this.jumpCount < this.maxJump
            && this.collided) {
            console.log('yayayay')
            this.verticalVelocity = 36;
            this.isJumping = true;
            this.jumpCount++

        }
    }

    //! maybe we should rename this method its confusing.
    applyGravity() {
        // update player y pos
        this.y -= this.verticalVelocity;

        if (this.isJumping || this.isFalling) {
            this.verticalVelocity -= this.playerGravity;
            this.isFalling = true;
            this.isGrounded = false;
        }
        else if (this.onPlatform) {
            this.verticalVelocity = 0;
            this.isJumping = false;
            this.isGrounded = true;
        }
        if (this.isFalling) {
                this.isJumping = false;
            }
    }

    jumpReleased() {
        //reset jump count (when key released)
        this.jumpCount = 0;
        //if key released velocity halves so that player can hold jump
        if (this.isJumping || this.isFalling) {
            this.verticalVelocity = this.verticalVelocity / 2;
        }
    }

    updateCameraBox() {
        this.cameraBox = {
            pos: {
                x: this.x - 325,
                y: this.y - 200,
            },
            width: 700,
            height: 300,
        }
    }

    renderCameraBox() {
        fill(0, 0, 255, 50);
        rect(
            this.cameraBox.pos.x,
            this.cameraBox.pos.y,
            this.cameraBox.width,
            this.cameraBox.height
        )
    }

    updateCameraPosition() {
        this.cameraYPos = this.y;
    }

    updateWallCollDectBox() {
        //left side (magenta colored)
        this.wallCollDetectionBoxLeft = {
            x: this.x - 25,
            y: this.y + 30,
            width: 25,
            height: 25,

        }

        //right side (yellow colored)
        this.wallCollDetectionBoxRight = {
            x: this.x + 100,
            y: this.y + 30,
            width: 25,
            height: 25,

        }
    }

    renderWallCollDectBox() {
        fill(252, 3, 232);
        rect(
            this.wallCollDetectionBoxLeft.x,
            this.wallCollDetectionBoxLeft.y,
            this.wallCollDetectionBoxLeft.width,
            this.wallCollDetectionBoxLeft.height
        )
        fill(252, 186, 3)
        rect(
            this.wallCollDetectionBoxRight.x,
            this.wallCollDetectionBoxRight.y,
            this.wallCollDetectionBoxRight.width,
            this.wallCollDetectionBoxRight.height
        )
    }

    checkWallColl(platforms) { //rename to walljump or sm
        this.collided = false;

        // checks collision for every platform in platforms array
        for (let platform of platforms) {
            if (Collision.isColliding(
                this.wallCollDetectionBoxLeft.x,
                this.wallCollDetectionBoxLeft.y,
                this.wallCollDetectionBoxLeft.width,
                this.wallCollDetectionBoxLeft.height,
                platform
            )) {
                this.collided = true;
                break;
            }
        }

        // right side player
        for (let platform of platforms) {
            if (Collision.isColliding(
                this.wallCollDetectionBoxRight.x,
                this.wallCollDetectionBoxRight.y,
                this.wallCollDetectionBoxRight.width,
                this.wallCollDetectionBoxRight.height,
                platform
            )) {
                this.collided = true;
                break;
            }
        }
    
    }

    handleCollsions(platforms) {
        Collision.handleCollisions(this, platforms);

        if (this.isGrounded) {
            // But the collision code might already be handling the snapping.
        } else {
            this.isFalling = true;
        }


    }


    renderDebug() {
        // Debug information
        fill(0);
        textSize(12);
        text('Frame: ' + frameCount, 50, 100);
        text('Velocity: ' + this.verticalVelocity, 50, 130);
        text('Position: (' + this.x + ', ' + this.y + ')', 50, 160);
        text('camerBoxY = ' + this.cameraBox.position.y, 50, 50)
        text('playerY = ' + this.y, 50, 25)

        if (this.isGrounded) {
            fill(0, 255, 20);
            text('isGrounded: ' + this.isGrounded, 50, 200);
        } else {
            fill(255, 0, 0); // Red when in the air
            text('isGrounded: ' + this.isGrounded, 50, 200);
        }

        if (this.isJumping) {
            fill(0, 255, 20);
            text('isJumping: ' + this.isJumping, 50, 230);
        } else {
            fill(255, 0, 0); // Red when not jumping
            text('isJumping: ' + this.isJumping, 50, 230);
        }
    }
}
