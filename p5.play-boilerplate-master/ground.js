class ground{
    constructor(x,y){

var options={
    isStaic:true
}

    this.ground=Bodies.rectangle(x,y,400,20,this.options);
    world.add(this.ground,world)


}}
function display(){
 var pos=this.ground.position;
 var angle=this.body.angle;
  ;
  transalate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  fill("green"); 
  rect(pos.x,pos.y,400,20,options);
  pop();
}