class Bin{
    constructor(x,y,width,height){
    var options= {
     isStatic: true
    }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
     this.image=loadImage("dustbingreen.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,655,280,105,150)
     }
}