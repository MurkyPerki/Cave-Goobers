class Platform {
    constructor(x, y, witdh, height) {
    this.x = x;
    this.y = y;
    this.width = witdh;
    this.height = height;
    }

    render() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.width, this.height);
    }
    
}