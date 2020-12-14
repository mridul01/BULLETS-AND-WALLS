var bullet,wall;
var speed,weight;
var thikness;



function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "white";

  bullet = createSprite(200,200,80,7);
  bullet.shapeColor = "silver";

  speed=random(223,321);
  weight=random(30,50);
  
  
}

function draw() {
  background(0); 
  
  if(keyDown("space")){
    bullet.velocityX = speed;
  }

  
    if(hasCollided(bullet,wall)){

      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed *speed/(thickness * thickness * thickness);

      if(damage > 10){
        wall.shapeColor = "green";
      }
      if(damage < 10){
        wall.shapeColor = "red";
      }
    }

    hasCollided();

  drawSprites();
}

function hasCollided(){ 
        bulletRightEdge = bullet.x + bullet.width;
        wallLeftEdge = wall.x;
        if(bulletRightEdge>=wallLeftEdge){
          return true;
        }
        return false;
}
