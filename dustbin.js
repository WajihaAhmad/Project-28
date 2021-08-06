class Dustbin{
    
    constructor (x,y,width,height) {
    var options = {
        isStatic:true,
    }
this.image=loadImage("dustbin.png");
this.body= Bodies.rectangle(x,y,20,20,options)
World.add(world,this.body);
this.width=width
this.height=height
World.add(world, this.body)
};

display(){
var pos=this.body.position;
this.image
rectMode(CENTER);
//rect(pos.x,pos.y,this.width,this.height);
image(this.image,845,310,150,150)
Dustbin.scale=0.1;
}

}