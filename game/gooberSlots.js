class GooberSlots {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isFilled = false;
    }

    update(player) {

        const hitboxX = player.x + player.collisionBox.offsetX;
        const hitboxY = player.y + player.collisionBox.offsetY;
        const hitboxW = player.collisionBox.width;
        const hitboxH = player.collisionBox.height;
      

        if (Collision.isColliding(
            hitboxX, 
            hitboxY, 
            hitboxW, 
            hitboxH,
            this)) {

            if (player.gooberCount > 0 && !this.isFilled) {
                player.gooberCount--;
                this.isFilled = true;
            }

            console.log("goobers placed. player goobers:", player.gooberCount)
        }


    
    }

    render() {

        push();
        fill(this.isFilled ? 'yellow' : 'white');
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}