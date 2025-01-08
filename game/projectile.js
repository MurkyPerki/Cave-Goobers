class Projectile {


constructor(x, y, vx, vy, width, height){

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.width = width;
    this.height = height;


    this.duration = 150;
}
    

update(){ 

this.x += this.vx;
this.y += this.vy;


this.duration--;


}




render() {

push();
fill(200);
rect(this.x, this.y, this.width, this.height);
pop();


}



isDead() { 
    return  this.duration <= 0

}


}