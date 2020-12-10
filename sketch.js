var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,75,25);
  bullet.velocityX = speed;
  bullet.debug = true;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,0);  

  fill(0,0,0);
  textSize(20);
  text("Speed(bullet): " + speed, 100,50);
  text("Weight(bullet): " + weight, 450,50);
  text("Thickness(wall): " + thickness, 800,50);

  if(hasCollided(bullet,wall)){
    
    bullet.velocityX = 0;

    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}