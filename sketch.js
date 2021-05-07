const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
function setup() {
  createCanvas(3000,900);

  engine=Engine.create();
  world=engine.world;
  ground = new Ground(600,700,2000,20);
  box1 = new Box (700,650,100,100);
  box2 = new Box2 (780,650,100,100);
  box3 = new Box3 (860,650,100,100);
  box4 = new Box4 (940,650,100,100);

  box5 = new Box (700,650,100,100);
  box6 = new Box2 (780,650,100,100); 
  box7 = new Box3 (860,650,100,100);
  box8 = new Box4 (940,650,100,100);

  box9 = new Box  (700,650,100,100); 
  box10 = new Box2 (780,650,100,100);
  box11 = new Box3 (860,650,100,100); 
  box12= new Box4 (940,650,100,100);

  

  ball=new Ball(200,200, 150, 150);
  rope=new Rope(ball.body,{x:500,y:50});
}

function draw() {
  background("black"); 
  
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  box1.display();
  box2.display(); 
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}