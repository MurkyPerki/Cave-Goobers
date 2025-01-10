class Platform {
    constructor(x, y, width, height, isBossPlatform = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isBossPlatform = isBossPlatform;
    }

    render() {
        push();
        noStroke();

        if (this.isBossPlatform) {
            // A different color or style for boss platforms
            stroke(10,200,40)
            fill(150, 0, 60);  
        } else {
            // The default style
            fill(33, 49, 35, 10);
        }

        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}
