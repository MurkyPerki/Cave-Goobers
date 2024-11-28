class Platform {
    constructor(platformX, platformY, platformW, platformH) {
    this.platformX = platformX;
    this.platformY = platformY;
    this.platformW = platformW;
    this.platformH = platformH;
    }

    render() {
        fill(255, 0, 0);
        rect(this.platformX, this.platformY, this.platformW, this.platformH);
    }
    
}