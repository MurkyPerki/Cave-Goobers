class Entity {
    constructor() {
        this.isAlive = true;
        this.health = 100;

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
        this.applyGravity();
        this.handleCollsions(platforms)
        this.renderDebug();
        this.renderCameraBox();
        this.updateCameraBox();
        this.shouldPanCameraDown();
    }




    // die() {

    //     if (this.isAlive) {
    //        entities.update();
    //     }
    //     if (this.health < 0) {
    //         !this.isAlive;
    //     }

    //     // when player dies => SwitchToStartScreen();
    // }
}