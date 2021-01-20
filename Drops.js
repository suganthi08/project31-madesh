class Drop{
	constructor(x,y)
	{
		var options={
			restitution :0.1,
            friction :0.001,
			}
		this.x=x;
		this.y=y;
		this.rain=Bodies.circle(this.x, this.y,5, options)
		this.r=5
		World.add(world, this.rain);
	}
	update(){
		if(this.rain.position.y > height){
			Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
		}
	}

	display(){

		push()
		// rectMode(CENTER);
		fill(255)
		ellipseMode(CENTER);
		ellipse(this.rain.position.x,this.rain.position.y,this.r, this.r)
		pop()
	}
}
