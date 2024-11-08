let backgroundImage;

function preload() {
    backgroundImage = loadImage('./assets/images/background.png');
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(backgroundImage, width, height);

}
yoooo