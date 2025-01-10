class Boss extends Enemy {

    constructor(x, y, width, height, entityManager) {
        super(x, y, width, height)
        this.entityManager = entityManager;

        this.health = 4;
        this.currentPhase = 0
        this.maxPhases = 3;

        this.isCharging = false;
        this.chargeFrames = 30;
        this.chargeTimer = 0;
        this.slamCooldown = 180;
        this.slamCooldownTimer = 0;
        this.chargeRed = 0;

        this.isShooting = false;
        this.projectileSpeed = 10;
        this.projectileWidth = 20;
        this.projectileHeight = 20;
        this.projectileRange = 2000;
        this.projectileCooldown = 100;
        this.lastProjectileFrame = 0;

        this.isPhaseChanging = false;
        // add hitbox just like in player 

    }



    movement() {
        // probably no movement, overwriting parent class
    }

    update(player, projectiles) {


        this.handleSlamLogic(player, projectiles);


        if (frameCount - this.lastProjectileFrame > this.projectileCooldown) {
            if (this.isPlayerInRange(player)) {
                this.shootProjectileTowardsPlayer(player);
                this.lastProjectileFrame = frameCount;
            }

        }
        // is for phase up logic.
        if (this.health < this.currentPhase) {
            this.advancePhase()
        }

    }


    handleSlamLogic(player) {


        if (!this.isCharging) {
            if (this.slamCooldownTimer > 0) {
                this.slamCooldownTimer--;
            } else {
                this.startSlamCharge();
            }
        }
        else {

            this.chargeTimer--;


            let progress = 1 - (this.chargeTimer / this.chargeFrames);
            this.chargeRed = Math.floor(progress * 255);


            if (this.chargeTimer <= 0) {
                this.performSlamDamage(player);
                // Reset
                this.isCharging = false;
                this.chargeRed = 0;      // back to normal color
                this.chargeTimer = 0;
                this.slamCooldownTimer = this.slamCooldown;
            }
        }
    }

    startSlamCharge() {
        this.isCharging = true;
        this.chargeTimer = this.chargeFrames; // 30
        this.chargeRed = 0;
    }




    performSlamDamage(player) {
        console.log("did slam damage")

        let slamX = 0;
        let slamY = this.y + this.height;
        let slamW = width;
        let slamH = 50;

        let playerx = player.x + player.collisionBox.offsetX;
        let playery = player.y + player.collisionBox.offsetY;
        let playerw = player.collisionBox.width;
        let playerh = player.collisionBox.height;

        if (Collision.isColliding(
            slamX, slamY, slamW, slamH,
            {
                x: playerx,
                y: playery,
                width: playerw,
                height: playerh
            })) {

            console.log("player got hit")
            player.health--;
        }

    }

    isPlayerInRange(player) {
        let distance = dist(this.x, this.y, player.x, player.y);
        return distance <= this.projectileRange

    }

    shootProjectileTowardsPlayer(player, projectiles) {
        console.log("boss shoots projectile")

        let direction = createVector(player.x - this.x, player.y - this.y);
        direction.normalize();
        direction.mult(this.projectileSpeed);

        let projectile = new Projectile(
            this.x + this.width / 2,
            this.y + this.height / 2,
            direction.x,
            direction.y,
            this.projectileWidth,
            this.projectileHeight
        );

        this.entityManager.projectiles.push(projectile);
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

        this.entityManager.collidables = [
            ...this.entityManager.platforms,
            ...this.entityManager.enemies
        ]
    }


    repositionPlatforms() {
        // so its smaller and i dont have to type it out.
        const plats = this.entityManager.platforms;


        // phase 2
        if (this.currentPhase === 1) {
            plats.push(new Platform(200, 500, 250, 50,true));
            plats.push(new Platform(100, 300, 200, 40,true));
            plats.push(new Platform(800, 300, 200, 40,true));
            plats.push(new Platform(0, 1000, width, 50,true))
        }

        // phase 3
        if (this.currentPhase === 2) {
            plats.push(new Platform(100, 300, 200, 40,true));
            plats.push(new Platform(0, 1000, width, 50,true))
        }

        if (this.currentPhase === 3) {
            plats.push(new Platform(100, 300, 200, 40,true));
            plats.push(new Platform(0, 1000, width, 50,true))
        }
    }


    positionGooberSlots() {
        const slots = this.entityManager.gooberSlots;

        if (this.currentPhase === 1) {
            slots[0].x = 600; slots[0].y = 400;
            slots[1].x = 300; slots[1].y = 220;
            slots[2].x = 400; slots[2].y = 250;
            slots[3].x = 500; slots[3].y = 280;
            slots[4].x = 600; slots[4].y = 200;
        } else if (this.currentPhase === 2) {
            slots[0].x = 100; slots[0].y = 300;
            slots[1].x = 150; slots[1].y = 350;
            slots[2].x = 200; slots[2].y = 400;
            slots[3].x = 250; slots[3].y = 450;
            slots[4].x = 300; slots[4].y = 500;
        }
    }



    die() {

        console.log("boss is dead, you win?")
        // show end screen
    }


    render() {

        // image for boss 

        push();
        fill(255, 255 - this.chargeRed, 255 - this.chargeRed);
        rect(this.x, this.y, this.width, this.height);
        pop();


    }





    // add attack for when playwer is grounded

    // add shooting method uses projectile.

}
