class WindEnemy extends Enemy {

    constructor(x, y, width, height) {
        super(x, y, width, height);

        this.windRange = 500;
        this.windCooldown = 120;
        this.lastAttack = 0;
        
        this.projectileSpeed = 5;
        this.projectileWidth = 20;
        this.projectileHeight = 20;



    }

    update(player) {
        super.update(player);

        if (frameCount - this.lastAttack > this.windCooldown) {
            if (this.isPlayerInRange(player)) {
                this.shootWindProjectile(player);
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


    shootWindProjectile(player) {

        let direction = createVector(player.x - this.x, player.y - this.y);
        direction.normalize();

        direction.mult(this.projectileSpeed);

        let projectile = new WindProjectile(
            this.x + this.width / 2, 
            this.y + this.height / 2, 
            direction.x, 
            direction.y, 
            this.projectileWidth, 
            this.projectileHeight
          );

          entityManager.projectiles.push(projectile);
    }


    render() {

        super.render();
        fill(0, 30, 255)
        rect(this.x, this.y, this.width, this.height)

    }



}