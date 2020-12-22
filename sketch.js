var fixedRect, movingRect;
var ob1, ob2, ob3, ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1 = createSprite(200,200,80,30);
  ob1.shapeColor ="lightBlue";

  ob2 = createSprite(200,50,50,30);
  ob2.shapeColor ="lightBlue";

  ob3 = createSprite(800,200,80,50);
  ob3.shapeColor ="lightBlue";

  ob4 = createSprite(1000,200,40,30);
  ob4.shapeColor ="lightBlue";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  ob2.x = World.mouseX;
  ob2.y = World.mouseY;

bounceOff(movingRect , fixedRect);

  drawSprites();
}

