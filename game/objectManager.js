
class ObjectManager {
    constructor() {
        this.objects = [];
    }

    initializeObjects() {
        this.objects.push(new Item(750, 500, 100, 80))
        this.objects.push(new Item(100, 350, 100, 80))
        this.objects.push(new Item(900, 200, 100, 80))
    }

    update() {
        for (let object of this.objects) {
            object.update();
        }
    }

    render() {
        for (let object of this.objects) {
            object.render();
        }
    }
}


// createPlatformsTilemap2D(floorCollisions2)


// for (let platform of platforms) {
//     platform.render();
// }
