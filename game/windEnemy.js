class WindEnemy extends Enemy {

    constructor(x, y, width, height) {
        super(x, y, width, height);
    
        this.windRange = 500;
        this.windStrength = 5;
        this.windCooldown = 120;
        this.lastAttack = 0;



    }

    update(player) {
        super.update();

        if (frameCount - this.lastAttack > this.windCooldown) {
            if (this.isPlayerInRange(player)) {
                this.windPush(player); 
                this.lastAttack = frameCount; 
            }

            console.log(this.distance)
            // console.log(frameCount)
        }
    }

    isPlayerInRange(player) {
        this.distance = dist(this.x, this.y, player.x, player.y);
        return this.distance <= this.windRange;
    }


    windPush(player) {

        if (player.x > this.x) {
            player.x += this.windStrength;
        } else {
            player.x -= this.windStrength;
        }
    }


    render() {

        super.render();
        fill(0, 30, 255)
        rect(this.x, this.y , this.width, this.height)

    }



}