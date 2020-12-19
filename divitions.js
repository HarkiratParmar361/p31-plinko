class Divitions {
    constructor(x,y,w,h);{
    var optitons ={
        isStactic:true
    }
this.body=bodies.rectangle (x,y,w,h,optitons);
this.w=w;
this.h=h;
world.add(world,this.body);
    }
display(){
var pos= this.body.position;
rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.w, this.h);
    }
  };
}