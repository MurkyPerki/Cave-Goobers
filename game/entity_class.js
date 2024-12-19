class Entity {
    constructor() {
        this.isAlive = true;
        this.health = 100;

    }

    update() {
        this.move();
        this.applyGravity();
        this.updateCameraBox();
        this.updateCameraPosition();
    }

    render() {
        this.render();
        this.renderDebug();
        this.renderCameraBox();
    }
}