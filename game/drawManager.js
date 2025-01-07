
class DrawManager {

    managesAll(){
        background(255);
       
        //camera
        let cameraY = windowHeight / 2 - entityManager.player.cameraYPos;
    
        push();
        translate(0, cameraY);
        entityManager.update();
        entityManager.render();
        // platforms are defined here in sketch but i want to render from entityManager >:(
            // for (let platform of entityManager.platforms) {
            //     platform.render();
            // }
        pop();
        
        if(!start){
            gameScreen.startscreen();
             }
    }
}