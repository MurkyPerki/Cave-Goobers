
class DrawManager {

    managesAll() {
        background(255);

        gameScreen.update();


        if (entityManager.player.health <= 0) {
            gameScreen.gameState = 'restart';
        }
      

        //camera
        if (gameScreen.gameState === 'playing') {
            let cameraY = windowHeight / 2 - entityManager.player.cameraYPos;

            push();
            translate(0, cameraY);
            entityManager.update();
            entityManager.render();
            pop();


        } 

        push();
        fill(255);
        textSize(24);
        // show Health 
        text("Health: " + entityManager.player.health, 105, 40);
        // show Goober count
        text("Goobers: " + entityManager.player.gooberCount, 120, 80);
        pop();
    }
}