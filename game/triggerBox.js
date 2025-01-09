class TriggerBox {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    
    }

    update(player){ 
        //checking collision with player
        if (Collision.isColliding(this.x, this.y, this.width, this.height, player)) {
            this.onPlayerCollide(player);
        }
    }

    onPlayerCollide(player){
        if (player.gooberCount >= 5) {

            entityManager.loadBossLevel();

        } else { 
            console.log(" You need 5 goobers to face your fear")
        }


        
    }

    render() {

        push();
        fill(0, 255, 0, 50);
        rect(this.x, this.y, this.width, this.height);
        pop();

    }
}