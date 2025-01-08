
class Enemy {
    constructor(x, y, width, height) {
        // this.position = createVector(x, y);
        // this.velocity = createVector(0, 0);
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        this.vx = 2;
        this.vy = 0;
        // this.moveSpeed = 4;


        this.collisionBox = {
            offsetX: 0, 
            offsetY: 0, 
            width: this.width,
            height: this.height
        };
    }

    update() {
        this.movement();
       
    }

    render() {
        fill(200, 100, 10)
        rect(this.x, this.y, this.width, this.height)
    }

    movement() {
        //   this.position.x += this.moveSpeed;
        this.x += this.vx
        this.y += this.vy

        if (this.x + this.width > windowWidth || this.x < 0) {
            this.vx *= -1;
        }
    }

 
}

