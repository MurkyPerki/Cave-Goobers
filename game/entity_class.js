class Entity {
    constructor() {
        // this.health = 100;

    }

    // takeDamage(damage) {
    //     this.health -= damage;
    //     if (this.health <= 0) {
    //         this.die();
    //     }
    // }

    update() {
        this.render();
        this.move();
        this.jump();
    }

    // touchingGround() {
    //     if 

    //     /*
    //     AABB
    //     if ( ${this.entityX} + ${this.entityW} >= tileX ) etc..
    //     */
    // }


    // die() {
    //     super.die();

    //     SwitchToStartScreen();
    // }
}