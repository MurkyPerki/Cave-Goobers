class Platform {
    constructor(x, y, witdh, height) {
        this.x = x;
        this.y = y;
        this.width = witdh;
        this.height = height;
    }

    render() {
        fill(33, 49, 35);
        stroke(20, 25, 28);
        rect(this.x, this.y, this.width, this.height);
    }

}
