class Boss extends Enemy { 

    constructor(x, y, width, height) {
       super(x, y, width, height ) 


       this.health = 3;
       this.isSwiping = false;
       this.swipeCooldown = 180;
       this.swipeTimer = 0;

       this.isShooting = false;
       this.projectileCooldown = 240;
       this.projectileTimer = 0;

       this.currentPhase = 1
       this.maxPhases = 3;


       this.isPhaseChanging = false;
       


       // add hitbox just like in player 

    }

    

    movement() {
        // probably no movement, overwriting parent class
    }

    update(player, platforms, projectiles){

        this.handleTimers(player, projectiles);

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

    shootProjectileTowardsPlayer(player, projectiles) {
        console.log("boss shoots projectile")
    }

    takeDamage() {
        this.health--;
       if (this.health <= 0) {
            this.die();
        }
    }

    advancePhase(platforms) {
        
        this.currentPhase++;


        this.repositionPlatforms(platforms);
    }


    repositionPlatforms(platforms) {


    }


    die() {

        console.log("boss is dead")
        // show end screen
    }


    render() {

        // image for boss 

        push();
        fill(255);
        rect(this.x, this.y, this.width, this.height); 
        pop();


    }





    // add attack for when playwer is grounded

    // add shooting method uses projectile.


}