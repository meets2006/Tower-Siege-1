const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19;
var block20,block21,block22,polygon,slingshot;
function setup(){
  engine = Engine.create();
    world = engine.world;
    
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
polygon = new Polygon(150,200,20)
slingshot = new SlingShot(polygon.body,{x:150,y:200});
  stand1 = new Ground(500,360,200,10)
  stand2 = new Ground(690,200,200,10)
  block1 = new Box(430,340,30,30);
  block2 = new Box(460,340,30,30);
  block3 = new Box(490,340,30,30);
  block4 = new Box(520,340,30,30);
  block5 = new Box(550,340,30,30);
  block6 = new Box(580,340,30,30);
  block7 = new Box(460,310,30,30);
  block8 = new Box(490,310,30,30);
  block9 = new Box(520,310,30,30);
  block10 = new Box(550,310,30,30);
  block11 = new Box(490,280,30,30);
  block12 = new Box(520,280,30,30);
  block13 = new Box(505,250,30,30);
  block14 = new Box(620,180,30,30);
  block15 = new Box(650,180,30,30);
  block16 = new Box(680,180,30,30);
  block17 = new Box(710,180,30,30);
  block18 = new Box(740,180,30,30);
  block19 = new Box(650,150,30,30);
  block20 = new Box(680,150,30,30);
  block21 = new Box(710,150,30,30);
  block22 = new Box(680,120,30,30);
  
Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  stand1.display();
  stand2.display();
  slingshot.display();

  
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32)
  {
      slingshot.attach(polygon.body)
  }
}