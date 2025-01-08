class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render() {
        fill(33, 49, 35);
        stroke(20, 25, 28);
        rect(this.x, this.y, this.width, this.height);
    }

}
