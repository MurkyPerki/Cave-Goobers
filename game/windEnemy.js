class WindEnemy extends Enemy {

    constructor(x, y, width, height) {
        super(x, y, width, height);
    
        this.windRange = 500;
        this.windStrength = 10;
        this.windCooldown = 120;
        this.lastAttack = 0;
        this.windDuration = 60;
        



    }

    update(player) {
        super.update();

       

        if (frameCount - this.lastAttack > this.windCooldown) {
            if (this.isPlayerInRange(player)) {
                this.applyWindImpulse(player); 
                this.lastAttack = frameCount; 
            }
            // console.log(this.distance)
            // console.log(frameCount)
        }
    }

    isPlayerInRange(player) {
        this.distance = dist(this.x, this.y, player.x, player.y);
        return this.distance <= this.windRange;
    }


    applyWindImpulse(player) {
     
        let direction = createVector(player.x - this.x, player.y - this.y);
        direction.normalize();

        let impulseMagnitude = this.windStrength * 5;
        let impulse = direction.mult(impulseMagnitude);


        player.horizontalVelocity += impulse.x;  
        player.verticalVelocity   -= impulse.y; 
    }


    render() {

        super.render();
        fill(0, 30, 255)
        rect(this.x, this.y , this.width, this.height)

    }



}