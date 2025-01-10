
class Item {
    // this a goober for now
    constructor(x, y, width, height, items) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.originalY = y;
        this.aniOffset = 0;
        this.aniSpeed = 0.1;
        this.aniRange = 10;
        this.isPickedUp = false;
        this.items = items;
    }

    update(player) {
        this.render();
        this.pickedUp(player);
        // console.log(this.isPickedUp)
    }

    pickedUp(player) {
        
        const hitboxX = player.x + player.collisionBox.offsetX;
        const hitboxY = player.y + player.collisionBox.offsetY;
        const hitboxW = player.collisionBox.width;
        const hitboxH = player.collisionBox.height;

        if (this.isPickedUp) {
            this.shrinkAndRemove();
        } else if (Collision.isColliding(
            hitboxX,
            hitboxY,
            hitboxW,
            hitboxH,
            this)) {
            this.isPickedUp = true;

            player.gooberCount++;

            console.log("player goobers", player.gooberCount);
        } else {
            this.animate();
        }
    }

    shrinkAndRemove(){
        if (this.width > 0 && this.height > 0) {
            this.width -= 1.5;
            this.height -= 1;
            this.x += 0.5;
            this.y += 0.5;
        } else {
            this.width = 0;
            this.height = 0;
            let index = this.items.indexOf(this); //changed items to this.items, so it reaches items[] in entitymanager
            if (index > -1) {
                this.items.splice(index, 1); //same here
            }
        }
    }

    animate(){
        this.aniOffset += this.aniSpeed;
        this.y = this.originalY + sin(this.aniOffset) * this.aniRange;
    }

    render() {
        if (this.width <= 0 || this.height <= 0){
            return;
        }

        noStroke();
        fill(0, 140, 255);
        image(baby, this.x, this.y, this.width, this.height);
        

        //hitbox render
        // noFill();
        // stroke(0, 255, 0)
        // rect(this.x, this.y, this.width, this.height)
    }
}