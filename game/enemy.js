
class Enemy {
    constructor(x, y, width, height) {
        // this.position = createVector(x, y);
        // this.veloctity = createVector(0, 0);
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        this.veloctityX = 2;
        this.veloctityY = 0;
        // this.moveSpeed = 4;
    }

    update(player) {
        if(!player) {
            console.warn("Enemy.update: Player is undefined")
            return;
        }
        this.movement();
        this.handleCollision(player)
    }

    render() {
        fill(200, 100, 10)
        rect(this.x, this.y, this.width, this.height)
    }

    movement() {
        //   this.position.x += this.moveSpeed;
        this.x += this.veloctityX
        this.y += this.veloctityY

        if (this.x + this.width > windowWidth || this.x < 0) {
            this.veloctityX *= -1;
        }
    }

    handleCollision(player) {
        if (Collision.entityCollision(this, player)) {
            player.verticalVelocity = 0
        }
    }
}

