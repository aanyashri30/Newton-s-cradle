const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var s1,s2,s3,s4,s5;

function setup() {
	createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
	world = engine.world;
    
	Engine.run(engine);

	bob1 = new Pendulam(200,500,rgb(215,189,226));
	bob2 = new Pendulam(255,500,rgb(142,68,173));
	bob3 = new Pendulam(310,500,rgb(215,189,226));
	bob4 = new Pendulam(365,500,rgb(142,68,173));
	bob5 = new Pendulam(420,500,rgb(215,189,226));

	
  
	s1 = new Sling(bob1.body,{x:200,y:50});
	s2 = new Sling(bob2.body,{x:250,y:50});
	s3 = new Sling(bob3.body,{x:300,y:50});
	s4 = new Sling(bob4.body,{x:350,y:50});
	s5 = new Sling(bob5.body,{x:400,y:50});

  
}


function draw() {
 background("black");
  
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 s1.display();
 s2.display();
 s3.display();
 s4.display();
 s5.display();
}

function mouseDragged()
{
Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

}

function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:45});

	}
}