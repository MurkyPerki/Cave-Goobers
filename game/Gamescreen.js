class Gamescreen {
    constructor(){
    this.x = width;
    this.y = height;
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
}