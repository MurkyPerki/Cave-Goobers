
class Sprite{
    constructor({position, imageSrc}) {
     this.position = position;
     this.image = loadImage(imageSrc);
    }

    render(){
        this.image.width = windowWidth;
        image(this.image, this.position.x, this.position.y);
    }
    
}