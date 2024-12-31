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

    createPlatformsTilemap2D(tilemap2D) {
        let tileWidth = width / tilemap2D[0].length;
        let tileHeight = tileWidth;

        platforms = [];
        for (let row = 0; row < tilemap2D.length; row++) {
            for (let col = 0; col < tilemap2D[row].length; col++) {
                let tileValue = tilemap2D[row][col];
                if (tileValue === 2) {
                    let x = col * tileWidth;
                    let y = row * tileHeight;
                    platforms.push(new Platform(x, y, tileWidth, tileHeight))


                }

            }

        }
    }
}
