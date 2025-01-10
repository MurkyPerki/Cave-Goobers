class Boss extends Enemy { 

    constructor(x, y, width, height, entityManager) {
       super(x, y, width, height ) 
       this.entityManager = entityManager;


       this.health = 3;
       this.currentPhase = 1
       this.maxPhases = 3;

       this.isSwiping = false;
       this.swipeCooldown = 180;
       this.swipeTimer = 0;

       this.isShooting = false;
       this.projectileCooldown = 240;
       this.projectileTimer = 0;

       


       this.isPhaseChanging = false;
       


       // add hitbox just like in player 

    }

    

    movement() {
        // probably no movement, overwriting parent class
    }

    update(player){

        const projectiles = this.entityManager.projectiles;

        this.handleTimers(player, projectiles);
        
        // is for phase up logic.
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
            this.swipeTimer = this.swipeCooldown; // reset
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
        console.log("boss took damage! health is now", this.health)

       if (this.health <= 0) {
            this.die();
        }
    }

    advancePhase() {
        
        this.currentPhase++;

        // im clearing platforms
        this.entityManager.platforms.length = 0;

        this.repositionPlatforms();

        this.positionGooberSlots()
    }


    repositionPlatforms() {
        // so its smaller and i dont have to type it out.
        const plats = this.entityManager.platforms;


        // phase 2
        if (this.currentPhase === 2) {
            plats.push(new Platform(200, 500, 250, 50));
            plats.push(new Platform(100, 300, 200, 40));
        }

        // phase 3
        if (this.currentPhase === 3) {
            plats.push(new Platform(100, 300, 200, 40));
        }
    }


    positionGooberSlots() {
        const slots = this.entityManager.gooberSlots;

        if (this.currentPhase === 2) {
            for (let i = 0; i < slots.length; i++) {
                slots[i].x = 200 + (i * 80);
                slots[i].y = 200; 
            }
        } else if (this.currentPhase === 3) {
            for (let i = 0; i < slots.length; i++) {
                slots[i].x = 600 + (i * 60);
                slots[i].y = 400;
            }
        }
    }



    die() {

        console.log("boss is dead, you win?")
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