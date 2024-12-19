class CollisionBlock {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 18;
        this.h = 18;
    }

    show() {
     fill(255, 0, 0, 100);
     rect(this.x, this.y, this.w, this.h);
    }
}