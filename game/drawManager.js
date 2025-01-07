
class DrawManager {

    managesAll() {
        background(255);

        //camera
        let cameraY = windowHeight / 2 - entityManager.player.cameraYPos;

        push();
        translate(0, cameraY);
        entityManager.update();
        entityManager.render();
        pop();

        if (!start) {
            gameScreen.startscreen();
        }
    }
}