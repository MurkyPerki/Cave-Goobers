
class Entity {
    constructor() {
        // this.health = 100;
    }

    update() {
        this.move();
        this.show();
        this.jump();
        this.gravity();
    }

    //touchingGround()
    // die()

    // takeDamage(damage) {
    //     this.health -= damage;
    //     if (this.health <= 0) {
    //         this.die();
    //     }
    // }
}