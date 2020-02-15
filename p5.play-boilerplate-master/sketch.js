const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;






var engine,world;
var box1,box2,box3,bx4,box5,box6,box7,box8,ground1;

function setup() {
  var canvas = createCanvas(800,400);
 engine=Engine.create();
  world=engine.world;
  
box1=new box(0,0);
box2=new box(100,0);
box3=new box(200,0);
box4=new box(300,0);
box5=new box(400,0);
box6=new box(500,0);
box6=new box(600,0);
box7=new box(700,0);
box8=new box(800,0);

  
}

function draw() {
  engine.update(Engine);
  background(255,255,255);
  box1.display();
  box2.display(); 
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();  
 drawSprites();
}
