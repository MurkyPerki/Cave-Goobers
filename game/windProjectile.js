class WindProjectile extends Projectile {

    constructor(x, y, vx, vy, width, height){
        super(x, y, vx, vy, width, height);


        this.pushMultiplier = 2;

    }



    update(){

        super.update();

    }


    render(){

        push()
        fill(100,20,140)
        rect(this.x, this.y, this.width, this.height)
        pop()

    }


    applyWindPush(player){

        player.horizontalVelocity += this.vx * this.pushMultiplier;
        player.verticalVelocity += -this.vy * this.pushMultiplier;


    }

}