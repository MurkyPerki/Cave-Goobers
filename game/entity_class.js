
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

    // die()

    update() {
        this.move();
        this.show();
        this.jump();
        this.gravity();
    }

    //touchingGround()
}