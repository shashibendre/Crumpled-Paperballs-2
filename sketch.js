
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world

	paperball = new Paperball(400,350,20,20); 

	dustbinP1 = new DustbinP1(500,600,10,60)
	dustbinP2 = new DustbinP2(510,600,70,10)
	dustbinP3 = new DustbinP3(567,600,10,60)

	ground = new Ground(600,height,1200,20);
	//Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);

paperball.display();
dustbinP1.display();
dustbinP2.display();
dustbinP3.display();
ground.display();

 // drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x: 5,y: -10});

}

if(keyCode === RIGHT_ARROW){

	Matter.Body.applyForce(paperball.body,paperball.body.position,{x: 5,y: 0});
	
	}

	if(keyCode === LEFT_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x: -5,y: 0});
		
		}

}

