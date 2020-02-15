class box{
constructor(x,y,options){

var options={
  'density':5,
  'friction':0.9,
  'restitution':6
}
    this.body=Bodies.rectangle(x,y,100,50,options);
this.width=width;
this.height=height;
World.add(this.body,world)
}}
function display(){
  var pos=this.body.position;
  var angle=this.body.angle;
 push();
  transalate(pos.x,pos.y);
  rotate(angle);
  rectMode(CENTER);
  Fill("brown");
  rect(0,0,50,50,options);
 pop();

}