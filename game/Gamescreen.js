class Gamescreen {
    constructor(){
    this.x = width;
    this.y = height;
    this.gameState = 'start';
    }

    startscreen(){
        background(startScreen);
        fill(0);
        textAlign(CENTER, CENTER); 
        textFont(pixelFont); 
        textSize(48); 
        text("Cave Goobers", this.x / 2, this.y / 2 - 50); 
        textSize(24); 
        text("Press space to begin", this.x / 2, this.y / 2 + 20);
    }

    endscreen(){
        background(endScreen);
        fill(0);
        textAlign(CENTER, CENTER); 
        textFont(pixelFont); 
        textSize(60); 
        text("Boss Defeated", this.x / 2, this.y / 2 - 150); 
        textSize(30); 
        text("You win!", this.x / 2, this.y / 2 - 60);  
    }

    restartscreen(){
        background(restartScreen);
        fill(0);
        textAlign(CENTER, CENTER); 
        textFont(pixelFont); 
        textSize(60); 
        text("Player Defeated", this.x / 2, this.y / 2 - 150); 
        textSize(30); 
        text("You lose!", this.x / 2, this.y / 2 - 60); 
        textSize(30);
        text("press R to restart", this.x / 2, this.y / 2 - 30)    
    }

    update(){
    
    if (this.gameState === 'start') {
        this.startscreen();
    } else if (this.gameState === 'end'){
        this.endscreen();
    } else if (this.gameState === 'restart'){
        this.restartscreen();
    }
}

  startgame(){
    if (this.gameState === 'start' && keyIsPressed && key === ' ') {
        this.gameState = 'playing'; 
    }
  }

  restartgame(){
    if (this.gameState === 'restart' && keyIsPressed && key === 'r') {
        this.gameState = 'start'; 
        playerDefeated = false;
  }
}
}