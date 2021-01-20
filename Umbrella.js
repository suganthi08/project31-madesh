class Umbrella
{
    constructor(x,y){
       var  option = {
            isStatic: true
    }
        this.umbrella = Bodies.circle(x,y,50,option)
this.r = 50
World.add(world,this.umbrella)
this.image=loadImage("Walking Frame/walking_1.png")
    }

display(){
    imageMode(CENTER)
image (this.image,this.umbrella.position.x,this.umbrella.position.y+70,300,300)



}
}