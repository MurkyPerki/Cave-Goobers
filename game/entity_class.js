class Entity {
    constructor() {
        this.gameMode = 0;
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


    // die() {
    //     super.die();

    //     SwitchToStartScreen();
    // }
}