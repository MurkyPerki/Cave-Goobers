class GooberSlots {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isFilled = false;
    }

    update(player) {

        if (Collision.isColliding(player.collisionBox.x, player.collisionBox.y, player.collisionBox.width, player.collisionBox.height, this)) {
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