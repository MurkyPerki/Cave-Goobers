
class Sprite{
    constructor({position, imageSrc}) {
     this.position = position;
     this.image = loadImage(imageSrc);
    }

    render(){
        image(this.image, this.position.x, this.position.y);
    }


}