class Boss extends Enemy { 

    constructor(x, y, width, height) {
       super(x, y, width, height ) 


       this.health = 3;
       







       this.currentPhase = 1
       this.maxPhases = 3;


       this.isPhaseChanging = false;
       


       // add hitbox just like in player 

    }

    

    movement() {
        // probably no movement, overwriting parent class
    }

    update(player, platforms, projectiles){

        this.handleTimer(player, projectiles);

        if (this.health < this.currentPhase) {
            this.advancePhase(platforms)
        }

    }


    handleTimers(player,projectiles) {
         
        if (this.swipeTimer > 0) {
            this.swipeTimer--;
        } 
        if (this.projectileTimer > 0) {
            this.projectileTimer--;
        }

        if (player.isGrounded && this.swipeTimer <= 0) {
            this.doSwipeAttack(player);
            this.swipeTimer = this.swipeCooldown;
        }

        if (this.projectileTimer <= 0) {
            this.shootProjectileTowardsPlayer(player, projectiles);
            this.projectileTimer = this.projectileCooldown;
            
        }
    }

    doSwipeAttack(player) {
        console.log("boss swipes ground")
    }

    render() {

        // image for boss 

        push();
        fill();
        rect(this.x, this.y, this.width, this.height); 
        pop();


    }





    // add attack for when playwer is grounded

    // add shooting method uses projectile.


}