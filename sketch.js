
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20)

	paper = new Paper(100,600,20);
	
	bin1 = new Bin(550,620,20,100)
	bin2 = new Bin(610,660,100,20)
	bin3 = new Bin(670,620,20,100)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);

  Engine.update(engine);

  ground.display();
  
  paper.display();
 
  bin1.display();
  bin2.display();
  bin3.display();
 
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
	}
}


