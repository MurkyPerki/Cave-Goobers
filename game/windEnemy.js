class WindEnemy extends Enemy {

    constructor(x, y, width, height) {
        super(x, y, width, height);
    
        this.windRange = 500;
        this.windStrength = 5;
        this.windCooldown = 120;
        this.lastAttack = 0;
        this.activeWindForce = null;
        this.windDuration = 60;
        this.windTimer = 0;



    }

    update(player) {
        super.update();

        if (this.activeWindForce){
            this.windPush(player);

        }

        if (frameCount - this.lastAttack > this.windCooldown) {
            if (this.isPlayerInRange(player)) {
                this.startWindPush(player); 
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


    startWindPush(){

        let direction = createVector(player.x - this.x, player.y - this.y);
        direction.normalize();


        this.activeWindForce = direction.mult(this.windStrength);  // have to use math func because * doesnt work on vector(objects)

        this.windTimer = this.windDuration;

    }



    windPush(player) {

        if (this.windTimer > 0){

            player.x += this.activeWindForce.x * (this.windTimer / this.windDuration); 
            player.y += this.activeWindForce.y * (this.windTimer / this.windDuration);


            this.windTimer -= 1;

            if (this.windTimer <=0) {
                this.activeWindForce = null;
            }
        }
    
    }


    render() {

        super.render();
        fill(0, 30, 255)
        rect(this.x, this.y , this.width, this.height)

    }



}