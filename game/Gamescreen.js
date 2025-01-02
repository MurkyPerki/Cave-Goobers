class Gamescreen {
    constructor(){
    this.x = width;
    this.y = height;
    }

    startscreen(){
        background(150);
        fill(255);
        textAlign(CENTER, CENTER); 
        textFont(pixelFont); 
        textSize(48); 
        text("Welkom bij de Game!", this.x / 2, this.y / 2 - 50); 
        textSize(24); 
        text("Press space to begin", this.x / 2, this.y / 2 + 20);
    }


}