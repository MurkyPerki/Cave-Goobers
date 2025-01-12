
class DrawManager {

    managesAll() {
        background(255);

        gameScreen.update();

        if (playerDefeated) {
            gameScreen.gameState = 'restart';
        } else if (bossDefeated) {
            gameScreen.gameState = 'end';
        }


        //camera
        if (gameScreen.gameState === 'playing') {
            let cameraY = windowHeight / 2 - entityManager.player.cameraYPos;

            push();
            translate(0, cameraY);
            entityManager.update();
            entityManager.render();
            pop();

            if (entityManager.player.health <= 0) {
                gamescreen.gameState = 'restart';
            }

        } else {
            // If not playing, update the gamescreen display (start, end, or restart)
            gamescreen.update();
        }
    }
}