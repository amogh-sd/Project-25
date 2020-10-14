class Bin{

    constructor(x,y,w,h){
  
  var options = {
    'isStatic' : true, 
    'friction' : 0.01, 
    'restitution' : 100,
    'density' : 1
  
    
  }
  
      this.body = Matter.Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
  World.add(world,this.body);
    }
  display(){
  
  var pos = this.body.position;
  
  rectMode(CENTER);
  rect(pos.x,pos.y,this.w,this.h);
  
  }
  
  }