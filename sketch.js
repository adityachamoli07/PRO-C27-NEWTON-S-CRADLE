
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
const Render = Matter.Render;

var bob1,roof1,bob2,bob3,bob4,bob5,chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Her
	roof1=new Roof(600,100,450,20);
	bobDiameter=40;
    startBobPositionX=width/2;

	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
    bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	var render = Render.create(
	{ element: document.body, 
	engine: engine, 
	options: { width: 1200, height: 700, wireframes: false } });

	chain1=new chain(bob1.body,roof1.body,-bobDiameter*2, 0) 
	chain2=new chain(bob2.body,roof1.body,-bobDiameter*1, 0)
	chain3=new chain(bob3.body,roof1.body,0, 0)
	chain4=new chain(bob4.body,roof1.body,bobDiameter*1, 0) 
	chain5=new chain(bob5.body,roof1.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
	background(230)
  rectMode(CENTER);
  bob1.display();
  roof1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}
function keyPressed() { if (keyCode === "UP_ARROW")
 {
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
 }}

 function drawLine(constraint) { 
bobBodyPosition=constraint.bodyA.position;
roofBodyPosition=constraint.bodyB.position ;
roofBodyOffset=constraint.pointB;
roofBodyX=roofBodyPosition.x+roofBodyOffset.x ;
roofBodyY=roofBodyPosition.y+roofBodyOffset.y ;
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY); 
}




