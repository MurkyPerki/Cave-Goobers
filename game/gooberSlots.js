class GooberSlots {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.isFilled = false;
    }

    update(player) {

        if (Collision.isColliding(this.x, this.y, this.width, this.height, player)) {
            if (player.gooberCount > 0 && !this.isFilled) {
                player.gooberCount--;
                this.isFilled = true;
            }
        }


    
    }

    render() {

        push();
        fill(this.isFilled ? 'yellow' : 'white');
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}