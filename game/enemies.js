let enemy; 
let edge = false


class Enemy {
  constructor(x, y) {
    // Create a new vector for each instance of Enemy
    this.enemyPos = createVector(x, y); 
    this.speed = 2
  }

  render() {
    strokeWeight(25);
    point(this.enemyPos.x, this.enemyPos.y); // Access vector 
  }


update() {
    // Add logic for movement or behavior
    
    this.enemyPos.x += this.speed
    

    if(this.enemyPos.x + 25 / 2 > width ||
       this.enemyPos.x - 25 / 2 < 0 ||
       this.enemyPos.y + 25 / 2 > height ||
       this.enemyPos.y - 25 / 2 < 0
    ){
        edge = true
    }
       
    if(edge === true){
    
        this.speed *= -1
        edge = false
    }
}
}

function setup() {
  createCanvas(800, 800);

 
  enemy = new Enemy(400, 200); 
}

function draw() {
  background(220);
  enemy.render(); 
  enemy.update()
}