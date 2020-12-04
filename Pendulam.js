class Pendulam
{
	constructor(x,y,color)
	{
		var options={
			isStatic:false,
            restitution:1,
            friction:0,
			frictionAir:0.0,
			inertia:-1
			
			}
		this.x=x;
		this.y=y;
		this.color=color;
		
		this.body=Bodies.rectangle(this.x, this.y,40,40,options)
		World.add(world, this.body);

	}
	display()
	{
			
            var pos=this.body.position;
            var angle=this.body.angle;
			push()
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER)
            noStroke();
			fill(this.color)
			ellipse(0,0,this.r, this.r);
		    pop()
			
	}

}

