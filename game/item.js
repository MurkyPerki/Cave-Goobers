
class Item {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.originalY = y;
        this.aniOffset = 0;
        this.aniSpeed = 0.1;
        this.aniRange = 10;
        this.isPickedUp = false




    }



    update() {




        this.render();
        this.pickedUp();
        console.log(this.isPickedUp)
    }



    pickedUp() {

        if (Collision.entityCollision(this, player)) {
            this.isPickedUp = true;

        }

        if (this.isPickedUp && (this.width && this.height) > 0) {
            this.width -= 1
            this.height -= 1

        } else {

            this.aniOffset += this.aniSpeed;
            this.y = this.originalY + sin(this.aniOffset) * this.aniRange;

        }

    }



    render() {

        
        noStroke()
        fill(0, 140, 255)
        rect(this.x, this.y, this.width, this.height, 40, 20)

        
        noFill();
        stroke(0, 255, 0)
        rect(this.x, this.y, this.width, this.height)
        
    }







}