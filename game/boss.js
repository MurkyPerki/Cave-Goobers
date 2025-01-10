class Boss extends Enemy { 

    constructor(x, y, width, height, entityManager) {
       super(x, y, width, height ) 
       this.entityManager = entityManager;


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

    update(player){

        const projectiles = this.entityManager.projectiles;

        this.handleTimers(player, projectiles);

        if (this.health < this.currentPhase) {
            this.advancePhase()
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

    advancePhase() {
        
        this.currentPhase++;

        // im clearing platforms
        this.entityManager.platforms.length = 0;

        this.repositionPlatforms();

        this.entityManager.gooberSlots.forEach((slot, index) => {
            slot.x = 200 + index * 80;
            slot.y = 300;            
        });
    }


    repositionPlatforms() {

        if (this.currentPhase === 2) {
            platforms.push(new Platform(200, 500, 250, 50));
            platforms.push(new Platform(100, 300, 200, 40));
        }
        if (this.currentPhase === 3) {
            platforms.push(new Platform(100, 300, 200, 40));
        }
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