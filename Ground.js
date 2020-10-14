class Ground{

    constructor(x,y,w,h){
  
  var options = {
    'isStatic' : true, 
    'friction' : 10, 
    'restitution' : 0.05,
    'density' : 10
  
    
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