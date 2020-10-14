const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbinpart1,dustbinpart2,dustbinpart3, dustbin;

function preload() {
	dustbinImg = loadImage("Dustbin.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(680, 580, 2, 2)
	dustbin.addImage(dustbinImg)
	dustbin.scale = 1


paper = new Paper(200,80,50);


dustbinpart1 = new Bin(690,643,110,10);
dustbinpart2 = new Bin(630,600,15,100);
dustbinpart25 = new Bin(630,600,20,50);
dustbinpart3 = new Bin(740,580,15,150);
dustbinpart35 = new Bin(740,580,20,250);

ground = new Bin(400,695,2000,10);

}


function draw() {

	console.log(paper.x)
	
  rectMode(CENTER);
  background(0);

 

  Engine.update(engine);

dustbinpart1.display();
dustbinpart2.display();
dustbinpart3.display();
paper.display();
dustbin.display();

keyPressed();

  drawSprites();
 
}


function keyPressed() {

	if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0.05,y:-0.05});
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0.05,y:0.06});


		
	}

	if(keyCode === DOWN_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0});
			
	}

}