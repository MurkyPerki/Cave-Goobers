
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
        // console.log(this.isPickedUp)
    }



    pickedUp() {

        if (Collision.entityCollision(this, player)) {
            this.isPickedUp = true;

        }

        if (this.isPickedUp && this.width > 0 && this.height > 0) {
            this.width -= 1
            this.height -= 1


            //keep shrink to the center
            this.x += 0.5
            this.y += 0.5

        } else if (this.isPickedUp) {
            // The item is fully shrunk. 
            this.width = 1;
            this.height = 1;


            let index = items.indexOf(this);
            if (index > -1) {
                items.splice(index, 1);
            }

          

        } else {

            this.aniOffset += this.aniSpeed;
            this.y = this.originalY + sin(this.aniOffset) * this.aniRange;

        }

    }



    render() {


        noStroke()
        fill(0, 140, 255)
        image(baby, this.x, this.y, this.width, this.height)
        // rect(this.x, this.y, this.width, this.height, 40, 20)

        //hitbox render
        // noFill();
        // stroke(0, 255, 0)
        // rect(this.x, this.y, this.width, this.height)

    }







}