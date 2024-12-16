class WindEnemy extends Enemy{
   
    constructor(x, y){

        super(x, y)
        this.windRange = 100; 
        this.windForce = createVector(2, 0);
        this.windCooldown = 120;
        this.lastAttack = 0;



    }



    udpate(player){
        super.update();
        if( frameCount - this.lastAttack > this.windCooldown && this.isPlayerInRange(player)) {
            this.windPush(player)
            this.lastAttack = frameCount;
        }

        console.log(this.isPlayerInRange)
        console.log(frameCount)
    }

    isPlayerInRange(player){
        let distance = dist(this.x, this.y, player.x, player.y);
        return distance <= this.windRange;
    }


    


}